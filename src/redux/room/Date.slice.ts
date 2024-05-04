/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate:'',
    endDate:'',

};
// GetRoomItemSlice
const GetDateRoomSlice = createSlice({
   
    name: "GetRoomItemSlice",
    initialState,
    reducers: {
        setStartDayRoom:(state, { payload }) => {
          state.startDate = payload;
      },
      setEndDayRoom:(state, { payload }) => {
          state.endDate = payload;
      },
   
  
    }
  
});
// eslint-disable-next-line no-empty-pattern
export const {setStartDayRoom,setEndDayRoom} = GetDateRoomSlice.actions;

export const GetDateSlice = GetDateRoomSlice.reducer;

