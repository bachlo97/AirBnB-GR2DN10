import { editUser, getProfile } from "@/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProfileThunk = createAsyncThunk(
  "getProfileThunk",
  async (id: number) => {
    try {
      const resp = await getProfile(id);
      return resp.data.content;
    } catch (e) {
      console.log(e);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  "updateUserThunk",
  async ({ payload, id }: any) => {
    try {
      const resp = await editUser(payload, id);
      console.log(1234567,resp.data.content)
      return resp.data.content;
    } catch (e: any) {
      console.log(e.response.data.content);
      throw new Error(e);
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
    builder
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const { setUser } = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;
