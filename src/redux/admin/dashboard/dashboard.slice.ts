import { getCommentRooms } from "@/services/comment";
import { getUsers } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  handleBarChart,
  handleColumnChart,
  handleCommentOverView,
  handleLineChart,
} from "./helper";
import { getBookingList } from "@/services/booking";
import { getRooms } from "@/services/room";
import { getLocaltion } from "@/services/localtion";

const initialState = {
  overView: {
    totalStars: "",
    totalComments: "",
    totalUser: "",
    totalRoom: "",
    totalLocation: "",
  },
  lineChart: [],
  columnChart: [],
  barChart: [],
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

      //Drop elements in comment data if maNguoiBinhLuan in comment without id in user data

      let commentsDataFilter = commentsData.filter((comment: any) =>
        usersData.some((user: any) => user.id === comment.maNguoiBinhLuan),
      );

      //Drop elements in comment data if maPhong in comment without id in room data
      commentsDataFilter = commentsDataFilter.filter((comment: any) =>
        roomData.some((room: any) => room.id === comment.maPhong),
      );

      //   handle overview
      const commentOverView = handleCommentOverView(commentsDataFilter);
      result.push({
        ...commentOverView,
        totalUser: usersData.length,
        totalRoom: roomData.length,
        totalLocation: locationData.length,
      });

      // handle line-chart
      const lineChartVirtulized = handleLineChart(bookingData);
      result.push(lineChartVirtulized);

      console.log({ result });

      // handle column-chart
      const columnChartVirtulized = handleColumnChart(bookingData, roomData);
      result.push(columnChartVirtulized);

      // handle bar-chart

      const barChartVirtulized = handleBarChart(
        bookingData,
        roomData,
        locationData,
      );
      result.push(barChartVirtulized);
      return result;
    } catch (e) {
      console.log("errr", e);
    }
  },
);

const DashBoardSlice = createSlice({
  name: "DashBoardSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashBoardInfoThunk.fulfilled, (state, { payload }) => {
      const [overView, lineChart, columnChart, barChart] = payload;
      state.overView = overView;
      state.lineChart = lineChart;
      state.columnChart = columnChart;
      state.barChart = barChart;
    });
  },
});

export const {} = DashBoardSlice.actions;

export const dashBoardReducer = DashBoardSlice.reducer;

