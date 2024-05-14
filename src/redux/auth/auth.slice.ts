import { getProfile, uploadAvatar } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProfileThunk = createAsyncThunk(
  "getProfileThunk",
  async (id: number) => {
    try{
      const resp = await getProfile(id);
      return resp.data.content;
    }catch(e){
      console.log(e)
    }

  },
);

const initialState = {
  user: null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfileThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const {setUser} = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
