import { getCommentRoomId } from "@/services/comment/comment.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCommentThunk = createAsyncThunk(
    "getCommentThunk",
    async (id: any) => {
      try{
        const resp = await getCommentRoomId(id);
        return resp.content;
      }catch(e){
        console.log(e)
      }
  
    },
  );
  const initialState = {
    listComment: [],
  };
  const CommentSlice = createSlice({
    name: "CommentSlice",
    initialState,
    reducers: {
      setComment: (state, { payload }) => {
        state.listComment = payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getCommentThunk.fulfilled, (state, { payload }) => {
        state.listComment = payload;
      });
    },
  });
  export const {setComment} = CommentSlice.actions;

export const commentSlice = CommentSlice.reducer;
