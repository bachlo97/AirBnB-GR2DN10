/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLocaltion } from "@/services/localtion/Localtion.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrLocations: [],
    
};
export const getLocationsThunk = createAsyncThunk("getLocationsThunk",async () => {
    try {
        const data = await getLocaltion();
        return data.content;
    } catch (e: any) {
        console.log(e.response?.data);
    }
});
const getLocaltions = createSlice({
    name: "getLocations",
    initialState,
    reducers: {},
  
});
// eslint-disable-next-line no-empty-pattern
export const {} = getLocaltions.actions;

export const GetLocations = getLocaltions.reducer;

