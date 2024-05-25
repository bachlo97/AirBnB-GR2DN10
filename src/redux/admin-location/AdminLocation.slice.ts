import { getLocaltion } from "@/services/localtion/Localtion.service";
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
    },
  });
  export const {setLocation} = LocationSlice.actions;
  
export const locationSlice = LocationSlice.reducer;
