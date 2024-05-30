import { delRoomAPI, getRooms, postRoomAPI, putRoomAPI } from "@/services/room/Room.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRoomThunk = createAsyncThunk(
    "getRoomThunk",
    async () => {
      try{
        const resp = await getRooms();
     
        
        return resp.content.reverse();

      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const addRoomThunk = createAsyncThunk(
    "addRoomThunk",
    async (data:any) => {
      try{
        const resp = await postRoomAPI(data);
 
        const getData = await getRooms();
        return getData.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const delRoomThunk = createAsyncThunk(
    "delRoomThunk",
    async (id:any) => {
      try{
        const resp = await delRoomAPI(id);
 
        const getData = await getRooms();
        return getData.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const putRoomThunk = createAsyncThunk(
    "putRoomThunk",
    async (data:any) => {
      try {
        const resp = await putRoomAPI(data.id,data); // Assuming putLocaltion takes both id and data
  
        console.log("Location updated successfully:", resp);
  
        // Assuming getLocaltion() fetches all locations after update
        const updatedLocations = await getRooms();
        return updatedLocations.content.reverse(); // Return updated location data
  
      } catch (error) {
        console.error("Error updating location:", error);
        // Dispatch an error action to notify UI (optional)
      }
    }
  );
  const initialState = {
    listRoom: [],
  };
  const RoomSlice = createSlice({
    name: "getRoomThunk",
    initialState,
    reducers: {
     
      setRoom: (state, { payload }) => {
        state.listRoom = payload;
    
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(addRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(delRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(putRoomThunk.fulfilled, (state, action) => {
        state.listRoom = action.payload; // Update state with new data
      })
    },
  });
  export const {setRoom} = RoomSlice.actions;
  
export const roomSlice = RoomSlice.reducer;
