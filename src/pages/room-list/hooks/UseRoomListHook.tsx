import { getRoomsList } from "@/services/room/RoomsList.style";
import { IIFE } from "@/utils";
import { useEffect, useState } from "react";
import { converToRoomsList } from "../helpers/ConverToRoomList";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TRoom } from "@/services/room/Room.type";

export const useRoomListHook=()=>{
    const roomDate = useAppSelector((state) => state.GetDateSlice);
  const dispatch = useAppDispatch();

  const {location}=useParams()
  const [dataLocation,setDataLocation]=useState<TRoom[]>([]);
  useEffect(()=>{
    IIFE(async()=>{
      try{
         const data=await getRoomsList(location);
      const content=data.content;
      setDataLocation(converToRoomsList(content)); 
        

      }catch(e){
        console.log(e);
        
      }
    

    })
  },[location])
  return {roomDate,dispatch,dataLocation}
}