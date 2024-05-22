import { configureStore } from '@reduxjs/toolkit'
import { GetDateSlice } from './room/Date.slice'
import { GetCartsRoomSlice } from './cart/Cart.slice'
import { authReducer } from './auth/auth.slice'
import { bookingHistoryReducer } from './booking-history/booking-history.slice'
import { commentSlice } from './comment/Comment.slice'
import { dashBoardReducer } from './admin/dashboard/dashboard.slice'

export const store = configureStore({
  reducer: {
    // GetRoomItemReducer,
    GetDateSlice,
    GetCartsRoomSlice,
    authReducer,
    bookingHistoryReducer,
    dashBoardReducer,
    commentSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch