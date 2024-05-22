import { getCommentRooms } from "@/services/comment";
import { getUsers } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleCommentOverView } from "./helper";
import { getBookingList } from "@/services/booking";
import { getRooms } from "@/services/room";
import { getLocaltion } from "@/services/localtion";
import { CgLogIn } from "react-icons/cg";

const initialState = {
  overView: {
    totalStars: "",
    totalComments: "",
    totalUser: "",
    totalRoom: "",
    totalLocation: "",
  },
};

export const getDashBoardInfoThunk = createAsyncThunk(
  "getDashBoardInfoThunk",
  async () => {
    try {
      const result: any = [];

      //Call api
      const [commentsAPI, usersAPI, bookingAPI, roomsAPI, locationAPI] =
        await Promise.all([
          getCommentRooms(),
          getUsers(),
          getBookingList(),
          getRooms(),
          getLocaltion(),
        ]);
      //input
      const commentsData = commentsAPI.data.content;
      const usersData = usersAPI.data.content;
      const bookingData = bookingAPI.data.content;
      const roomData = roomsAPI.content;
      const locationData = locationAPI.content;

    //   handle overview
      const commentOverView = handleCommentOverView(commentsData);
      console.log({commentOverView})
      result.push({
        ...commentOverView,
        totalUser: usersData.length,
        totalRoom: roomData.length,
        totalLocation: locationData.length,
      });

      console.log('result',result)
      return result
    } catch (e) {
      console.log('errr',e);
    }
  },
);

const DashBoardSlice = createSlice({
  name: "DashBoardSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashBoardInfoThunk.fulfilled,(state,{payload})=>{
        const [overView] = payload
        state.overView = overView
    })
  }
});

export const {} = DashBoardSlice.actions;

export const dashBoardReducer = DashBoardSlice.reducer;
