/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    discount:0,
    priceRoom:100,
    imgRoom:'',
    nameRoom:'',
    idRoom:'',
};

const GetCartRoomSlice = createSlice({
   
    name: "GetCartRoomSlice",
    initialState,
    reducers: {
     setDisCount:(state, { payload }) => {
        state.discount = payload;
    },
     setPrice:(state, { payload }) => {
        state.priceRoom = payload;
    },
     setImg:(state, { payload }) => {
        state.imgRoom = payload;
    },
     setName:(state, { payload }) => {
        state.nameRoom = payload;
    },
     setIdRoom:(state, { payload }) => {
        state.idRoom = payload;
    },
   
  
    }
  
});
// eslint-disable-next-line no-empty-pattern
export const {setDisCount,setPrice,setImg,setName} = GetCartRoomSlice.actions;

export const GetCartsRoomSlice = GetCartRoomSlice.reducer;

