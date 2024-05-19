import useAlertHook from '@/hooks/notification/Alert';
import {  useAppSelector } from '@/redux/hooks';
import { postPay } from '@/services/pay/Pay.service';
import moment from 'moment';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function usePayHook() {
    const [countDay,setCountDay]=useState(0);
  const {alertSuccess}=useAlertHook()
  const [userPay,setUserPay]=useState<TPay>({

    id:0,
    maPhong: 0,
    ngayDen: '',
    ngayDi: '',
    soLuongKhach: 0,
    maNguoiDung: 0,
  });
  const navigate = useNavigate()  

  useEffect(()=>{
    postPay(userPay);
  },[userPay])
  
  const payRoom = useAppSelector((state: any) => state.GetCartsRoomSlice);
  const dateRoom = useAppSelector((state: any) => state.GetDateSlice);
  const user:any = useAppSelector((state) => state.authReducer.user);

  
  const startDate = moment(dateRoom.startDate);
const endDate = moment(dateRoom.endDate);


useEffect(()=>{

  if(startDate!==null&&endDate!==null){
    const diffInDays = endDate.diff(startDate, 'days');
    setCountDay(diffInDays)
  }
},[startDate, endDate])
const handleSubmit=()=>{
  alertSuccess('Thanh toán thành công !');
  setUserPay({  
  id: 0,
  maPhong: payRoom.idRoom,
  ngayDen: dateRoom.startDate,
  ngayDi: dateRoom.endDate,
  soLuongKhach: dateRoom.customers,
  maNguoiDung: user.id,}
)

}
  return {countDay,user,dateRoom,payRoom,handleSubmit}
}

export default usePayHook
