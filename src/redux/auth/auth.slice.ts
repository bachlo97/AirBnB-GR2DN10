import { getProfile } from '@/services/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getProfileThunk = createAsyncThunk('getProfileThunk',async(id:number)=>{
    const resp = await getProfile(id)
    return resp.data.content
})
const initialState = {
    user: null
}

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>{
    builder.addCase(getProfileThunk.fulfilled,(state,{payload})=>{
        state.user = payload
    })
  }
});

export const {} = AuthSlice.actions

export const authReducer = AuthSlice.reducer