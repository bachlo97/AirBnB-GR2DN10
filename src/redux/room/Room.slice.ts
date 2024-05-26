import { getRooms } from "@/services/room/Room.service";
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
    },
  });
  export const {setRoom} = RoomSlice.actions;
  
export const roomSlice = RoomSlice.reducer;
