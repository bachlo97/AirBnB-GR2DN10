import  { useEffect, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import './user-info.style.css'
import AccountInfo from "./account-info/account-info";
import BookingInfo from "./booking-info/booking-info";
import { Provider } from "./context";
import {  getLocalStorage } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getRoomBookingThunk } from "@/redux/booking-history/booking-history.slice";
import { USER_ID } from "@/constant";
type Props = {};

export default function UserInfo({}: Props) {
  
  const dispatch = useAppDispatch()
  const roomBookingList = useAppSelector(state => state.bookingHistoryReducer.roomBookingList)
  useEffect(()=>{
    dispatch(getRoomBookingThunk(getLocalStorage(USER_ID)))
    
  },[])
  useEffect(()=>{
    setHearts(roomBookingList.map(() => false))
  },[roomBookingList])
  const onChange = (key: string) => {
    console.log(key);
  };
  const [hearts, setHearts] = useState(roomBookingList.map(() => false));
  const toggleHeart = (index:number) => {
    const newHearts = [...hearts];
    newHearts[index] = !newHearts[index];
    setHearts(newHearts);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "THÔNG TIN TÀI KHOẢN",
      children: <Provider><AccountInfo/></Provider> ,
    },
    {
      key: "2",
      label: "LỊCH SỬ ĐẶT PHÒNG",
      children: <BookingInfo itemsPerPage={2} data={roomBookingList} hearts={hearts} toggleHeart={toggleHeart}/>,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} className='tab-user'/>;
}


