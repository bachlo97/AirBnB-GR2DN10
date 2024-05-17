import { getRoomBookingList, getRoomBookingViaUser } from "@/services/booking";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { convertToBookRoom } from "./helper";
export const getRoomBookingThunk = createAsyncThunk(
  "getRoomBookingThunk",
  async (id: number) => {
    try {
      const resp1 = await getRoomBookingViaUser(id);
      const roomBooking = convertToBookRoom(resp1.data.content)
      const resp2 = await getRoomBookingList(roomBooking);
      const results = resp2
        .filter((item) => item !== null) // Loại bỏ các phần tử null
        .map((item) => item.data.content); // Trích xuất dữ liệu từ content
      return results;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState = {
  roomBookingList: [
    {
      tenViTri: "",
      tinhThanh: "",
      hinhAnh: "",
      tenPhong: "",
      soLuongkhach: "",
      phongNgu: "",
      giuong: "",
      phongTam: "",
      mayGiat: false,
      banLa: false,
      tivi: false,
      dieuHoa: false,
      wifi: false,
      bep: false,
      doXe: false,
      hoBoi: false,
      banUi: false,
    },
  ],
};

const BookingHistorySlice = createSlice({
  name: "BookingHistorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomBookingThunk.fulfilled, (state, { payload }) => {
      state.roomBookingList = payload;
    });
  },
});

export const {} = BookingHistorySlice.actions;

export const bookingHistoryReducer = BookingHistorySlice.reducer;

// const data1 = [
//   {
//     tenViTri: "A",
//     tinhThanh: "A",
//   },
//   {
//     tenViTri: "B",
//     tinhThanh: "B",
//   },
//   {
//     tenViTri: "C",
//     tinhThanh: "C",
//   },
// ];
// const data2 = [
//   {
//     maPhong: "12",
//     soLuongKhach: 5,
//   },
//   {
//     maPhong: "13",
//     soLuongKhach: 2,
//   },
//   {
//     maPhong: "14",
//     soLuongKhach: 4,
//   },
// ];

// const result = [
//   {soLuongKhach:5},
//   {soLuongKhach: 2},
//   {  soLuongKhach: 4}
// ]
