import { getUsers,searchUsers } from '@/services/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUsersThunk = createAsyncThunk('getUsersThunk',async ()=>{
  try{
    const result = await getUsers()
    return result.data.content
  }catch(e){
    console.log(e)
  }
})

export const searchUsersThunk = createAsyncThunk('searchUsersThunk',async(keyword:string)=>{
  try{
    const result = await searchUsers(keyword)
    return result.data.content
  }catch(e){
    console.log('12312312314',e)
  }
})

const initialState = {
  userList: [],
  modal: false,
}


const UserManagementSlice = createSlice({
  name: "UserManagementSlice",
  initialState,
  reducers: {
    openModal : (state) => {
      state.modal = true
    },
    closeModal: (state) =>{
      state.modal = false
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(getUsersThunk.fulfilled,(state,{payload})=>{
      state.userList = payload
    }).addCase(searchUsersThunk.fulfilled,(state,{payload})=>{
      state.userList = payload
    })
  }
});

export const {openModal,closeModal} = UserManagementSlice.actions

export const userManagementReducer =  UserManagementSlice.reducer