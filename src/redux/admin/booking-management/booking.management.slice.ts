import { BookingManagement } from "@/pages/admin/booking-management/booking-management";
import { getBookingList } from "@/services/booking";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBookingListThunk = createAsyncThunk(
  "getBookingListThunk",
  async (maPhong: string) => {
    try {
      const dataAPI = await getBookingList();

      const result = dataAPI.data.content;
      if (!maPhong.trim()) {
        return result;
      } else {
        return result.filter((item: any) => item.maPhong === +maPhong);
      }
    } catch (e) {
      console.log(e);
    }
  },
);

export const handleModalDetailThunk = createAsyncThunk(
  "handleModalDetailThunk",
  async ({maPhong,maNguoiDung}:any) => {
    console.log(maPhong,maNguoiDung)
  },
);

const initialState = {
  bookingList: [],
  modal: false,
  detail: {},
};

const BookingManagementSlice = createSlice({
  name: "BookingManagementSlice",
  initialState,
  reducers: {
    changeModalState: (state, { payload }) => {
      state.modal = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookingListThunk.fulfilled, (state, { payload }) => {
      state.bookingList = payload;
    });
  },
});

export const { changeModalState } = BookingManagementSlice.actions;

export const BookingManagementReducer = BookingManagementSlice.reducer;

const data = [
  {
    maNguoiDung: 1,
    maPhong: 2,
    SoLuongKhach: 1,
  },
];
