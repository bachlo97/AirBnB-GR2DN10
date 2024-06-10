import { delRoomAPI, getRooms, postRoomAPI, putRoomAPI } from "@/services/room/Room.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRoomThunk = createAsyncThunk(
    "getRoomThunk",
    async (searchKey:string) => {
      try{
        const resp = await getRooms();
     
        
        const result = resp.content;
        if (searchKey.trim()) {
          const filteredResults = result.filter((item:any) =>
            item.tenPhong.toLowerCase().includes(searchKey.toLowerCase())
          );
          console.log(`Filtered results based on search key:`, filteredResults);
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
  export const addRoomThunk = createAsyncThunk(
    "addRoomThunk",
    async (data:any) => {
      try{
        const resp = await postRoomAPI(data);
        console.log(resp)
        const getData = await getRooms();
        return getData.content.reverse();
      
        
      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const delRoomThunk = createAsyncThunk(
    "delRoomThunk",
    async (id:any) => {
      try{
        const resp = await delRoomAPI(id);
        console.log(resp)
        const getData = await getRooms();
        return getData.content.reverse();
      }catch(e){
        console.log(e)
      }
  
    },
  );
  export const putRoomThunk = createAsyncThunk(
    "putRoomThunk",
    async (data:any) => {
      try {
        const resp = await putRoomAPI(data.id,data); 
  
        console.log("Location updated successfully:", resp);
  
        
        const updatedLocations = await getRooms();
        return updatedLocations.content.reverse(); 
  
      } catch (error) {
        console.error("Error updating location:", error);
      
      }
    }
  );
  const initialState = {
    listRoom: [],
  };
  const RoomSlice = createSlice({
    name: "getRoomThunk",
    initialState,
    reducers: {
     
      setRoom: (state, { payload }) => {
        state.listRoom = payload;
    
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(addRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(delRoomThunk.fulfilled, (state, { payload }) => {
        state.listRoom = payload;
      });
      builder.addCase(putRoomThunk.fulfilled, (state, action) => {
        state.listRoom = action.payload; // Update state with new data
      })
    },
  });
  export const {setRoom} = RoomSlice.actions;
  
export const roomSlice = RoomSlice.reducer;
