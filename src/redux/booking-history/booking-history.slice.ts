import { getRoomBookingList, getRoomBookingViaUser, getRoomLocationList } from "@/services/booking";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { convertToBookRoom ,combineRoom, handleResult} from "./helper";


export const getRoomBookingThunk = createAsyncThunk(
  "getRoomBookingThunk",
  async (id: number) => {
    try {
      const bookingApi = await getRoomBookingViaUser(id);
      const bookingData = convertToBookRoom(bookingApi.data.content);
  
      const roomListApi = await getRoomBookingList(bookingData);
      const roomListData = roomListApi.map((item: any) => item.data.content);
      console.log({ bookingData });
      console.log({ roomListData });
      const roomCombine = combineRoom(bookingData,roomListData)
      console.log({roomCombine})
      const locationListApi = await getRoomLocationList(roomCombine)
      const locationListData = locationListApi.map((item:any) => item.data.content)
      const result = handleResult(roomCombine,locationListData)
      console.log({result})
      return result.reverse()
    } catch (e) {
      console.log(e);
    }
  },
);

const initialState:any = {
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

