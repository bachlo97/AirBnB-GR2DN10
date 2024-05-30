import { addLocation, delLocation, getLocaltion, putLocaltion } from "@/services/localtion/Localtion.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAdminLocationThunk = createAsyncThunk(
    "getAdminLocation",
    async () => {
      try{
        const resp = await getLocaltion();
        console.log(resp.content);
        return resp.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  
export const delAdminLocationThunk = createAsyncThunk(
    "delAdminLocationThunk",
    async (id:any) => {
      try{
        const resp = await delLocation(id);
 
        const getData = await getLocaltion();
        return getData.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  
export const addAdminLocationThunk = createAsyncThunk(
    "addAdminLocationThunk",
    async (data:any) => {
      try{
        const resp = await addLocation(data);
 
        const getData = await getLocaltion();
        return getData.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const putAdminLocationThunk = createAsyncThunk(
    "putAdminLocationThunk",
    async (data :any) => {
      try {
        const resp = await putLocaltion(data.id, data); // Assuming putLocaltion takes both id and data
  
        console.log("Location updated successfully:", resp);
  
        // Assuming getLocaltion() fetches all locations after update
        const updatedLocations = await getLocaltion();
        return updatedLocations.content.reverse(); // Return updated location data
  
      } catch (error) {
        console.error("Error updating location:", error);
        // Dispatch an error action to notify UI (optional)
      }
    }
  );
  const initialState = {
    listLocation: [],
  };
  const LocationSlice = createSlice({
    name: "getAdminLocation",
    initialState,
    reducers: {
     
      setLocation: (state, { payload }) => {
        state.listLocation = payload;
    
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getAdminLocationThunk.fulfilled, (state, { payload }) => {
        state.listLocation = payload;
      });
      builder.addCase(delAdminLocationThunk.fulfilled, (state, action) => {
        state.listLocation = action.payload; // Update state with new data
      })
      builder.addCase(addAdminLocationThunk.fulfilled, (state, action) => {
        state.listLocation = action.payload; // Update state with new data
      })
      builder.addCase(putAdminLocationThunk.fulfilled, (state, action) => {
        state.listLocation = action.payload; // Update state with new data
      })
    },
  });
  export const {setLocation} = LocationSlice.actions;
  
export const locationSlice = LocationSlice.reducer;
