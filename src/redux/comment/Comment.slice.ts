import { deleteCommentRoom, getCommentRoom, getCommentRoomId } from "@/services/comment/comment.service";
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
    async (searchKey:string) => {
      try{
        const resp = await getCommentRoom();
        const result = resp.content;
        if (searchKey.trim()) {
          const filteredResults = result.filter((item:any) =>
            item.tenViTri.toLowerCase().includes(searchKey.toLowerCase())
          );
          return filteredResults;
        } else {
          // Return all results if no search key is provided
          return result.reverse();
        }
      }catch(e){
        console.log(e)
      }
  
    },
  );
export const delCommentThunk = createAsyncThunk(
    "delCommentThunk",
    async (arr:any) => {
      try{
        
        const resp = await deleteCommentRoom(arr[0].id);
        // console.log(arr[0].id);
        
        // const getData= await getCommentRoomId(arr[1]);
  
        
       return resp.data;
       
        
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
      builder.addCase(delCommentThunk.fulfilled, (state, { payload }) => {
        state.listComment = payload;
      });
    },
  });
  export const {setComment,setCommentAll} = CommentSlice.actions;

export const commentSlice = CommentSlice.reducer;
