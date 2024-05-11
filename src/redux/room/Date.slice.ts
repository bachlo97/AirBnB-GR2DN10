/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate:'',
    endDate:'',
    customers:0,
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
      setCustomers:(state, { payload }) => {
        state.customers = payload;
    },
   
  
    }
  
});
// eslint-disable-next-line no-empty-pattern
export const {setStartDayRoom,setEndDayRoom,setCustomers} = GetDateRoomSlice.actions;

export const GetDateSlice = GetDateRoomSlice.reducer;

