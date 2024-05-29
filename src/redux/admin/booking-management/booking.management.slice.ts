import { CommentManagement } from "@/pages/admin/comment-management/comment-management";
import { BookingManagement } from "@/pages/admin/booking-management/booking-management";
import { getBookingList } from "@/services/booking";
import {
  getLocationViaCode,
  getRoomViaCode,
} from "@/services/booking/booking.service";
import { getProfile } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { formatDate } from "@/utils";

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
  async ({ maPhong, maNguoiDung, soLuongKhach, ngayDen, ngayDi }: any) => {
    try {
      const result = {
        name: "",
        email: "",
        phone: "",
        tenPhong: "",
        hinhAnh: "",
        tenViTri: "",
        tinhThanh: "",
        soLuongKhach,
        ngayDen: formatDate(ngayDen.split("T")[0]),
        ngayDi: formatDate(ngayDi.split("T")[0]),
      };
      const userAPI = await getProfile(maNguoiDung);
      const { name, email, phone } = userAPI.data.content;
      const roomAPI = await getRoomViaCode(maPhong);

      const { tenPhong, maViTri, hinhAnh } = roomAPI?.data.content;

      const locationAPI = await getLocationViaCode(maViTri);

      const { tenViTri, tinhThanh } = locationAPI?.data.content;

      Object.assign(result, {
        name,
        email,
        phone,
        tenPhong,
        tenViTri,
        tinhThanh,
        hinhAnh,
      });
      return result;
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState: any = {
  bookingList: [],
  modal: false,
  detail: null,
  status: "idle",
};

const BookingManagementSlice = createSlice({
  name: "BookingManagementSlice",
  initialState,
  reducers: {
    changeModalState: (state, { payload }) => {
      state.modal = payload;
    },
    resetModalDetail: (state) => {
      state.status = 'idle';
    },
    setLoading: (state) =>{
      state.status = 'loading'
    },
    setSucess: (state) => {
      state.status = 'success'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookingListThunk.fulfilled, (state, { payload }) => {
        state.bookingList = payload;
      })
      .addCase(handleModalDetailThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          state.detail = payload;
        } else {
          state.detail = null;
        }
      });
  },
});

export const { changeModalState, resetModalDetail,setLoading,setSucess } =
  BookingManagementSlice.actions;

export const BookingManagementReducer = BookingManagementSlice.reducer;
