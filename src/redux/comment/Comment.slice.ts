import { getCommentRoom, getCommentRoomId } from "@/services/comment/comment.service";
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
export const getCommentThunkAll = createAsyncThunk(
    "getCommentThunkAll",
    async () => {
      try{
        const resp = await getCommentRoom();
        return resp.content;
      }catch(e){
        console.log(e)
      }
  
    },
  );
  const initialState = {
    listComment: [],
    listCommentAll:[],
  };
  const CommentSlice = createSlice({
    name: "CommentSlice",
    initialState,
    reducers: {
      setComment: (state, { payload }) => {
        state.listComment = payload;
      },
      setCommentAll: (state, { payload }) => {
        state.listCommentAll = payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getCommentThunk.fulfilled, (state, { payload }) => {
        state.listComment = payload;
      });
      builder.addCase(getCommentThunkAll.fulfilled, (state, { payload }) => {
        state.listCommentAll = payload;
      });
    },
  });
  export const {setComment,setCommentAll} = CommentSlice.actions;

export const commentSlice = CommentSlice.reducer;
