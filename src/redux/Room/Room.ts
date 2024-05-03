/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    nextDay:'',
    depDay:''
    
};

const getRoomItem = createSlice({
    name: "getRoomItem",
    initialState,
    reducers: {
        setNextDayRoom:(state, { payload }) => {
          state.nextDay = payload;
      },
      setPrevDayRoom:(state, { payload }) => {
          state.depDay = payload;
      },
  
    }
  
});
// eslint-disable-next-line no-empty-pattern
export const {setPrevDayRoom,setNextDayRoom} = getRoomItem.actions;

export const GetRoomItem = getRoomItem.reducer;

