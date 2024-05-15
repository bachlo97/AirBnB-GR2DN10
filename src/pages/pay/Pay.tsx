import { ButtonPrimary, ButtonPrimaryTwo } from '@/components/Button/Button'
import { Container } from '@/components/style-compoment/Container'
import useAlertHook from '@/hooks/notification/Alert';
import { useAppSelector } from '@/redux/hooks';
import { postPay } from '@/services/pay/Pay.service';
import moment from 'moment';
import { useEffect, useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function Pay() {
  const [countDay,setCountDay]=useState(0);
  const {alertSuccess}=useAlertHook('Thanh toán thành công')
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
  console.log(user);
  
  console.log(userPay);
  
  const startDate = moment(dateRoom.startDate);
const endDate = moment(dateRoom.endDate);


useEffect(()=>{

  if(startDate!==null&&endDate!==null){
    const diffInDays = endDate.diff(startDate, 'days');
    setCountDay(diffInDays)
  }
},[startDate, endDate])
  return (
    <Container>
      <div className='sm:w-[95%] xl:w-[75%] 2xl:w-[65%] mx-auto'>
        <h3 className='text-[2.3rem] font-bold flex items-center gap-3'>
        <IoIosArrowBack className='text-[1.8rem]'/>

          Xác nhận và thanh toán</h3>
        <div className="flex gap-[5%] flex-wrap gap mt-3">
        <div className='md:hidden sm:w-[100%] md:w-[35%] h-[300px] border border-solid border-gray-400 rounded-[1rem] p-8 mb-5'>
           <div className='flex gap-4 border-b border-solid border-gray-400 pb-7'>
            <img className='w-[100px] rounded-[1rem]' src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MDU1NzY0ODExOTA0MzgwNg%3D%3D/original/6b9dfc35-a011-4df1-bb89-ce66ea6230d2.jpeg?aki_policy=large" alt="" />
            <div>
              <h5 className='font-bold text-[1.6rem]'>Pretty room W window</h5>
              <p className='text-[1.4rem]'>Room in hotel</p>
              <p  className='text-[1.5rem] font-semibold'>1.99$</p>
            </div>
           </div>
           <div className='border-b border-solid border-gray-400 py-7'>
            <h4 className='font-bold text-[1.8rem] mb-3'>Chi tiết giá</h4>
            <div className='flex justify-between mb-2'>
                <p>20,50 CAD x 5 đêm</p>
                <p>$102,50 CAD</p>
            </div>
          
            <div className='flex justify-between'>
                <p>Mã Giảm Giá(nếu có)</p>
                <p>-30$</p>
            </div>

          

           </div>
      <div>
        <div className='flex justify-between  py-7'>
          <p className='font-bold text-[1.6rem]'>Tổng cộng:</p>
          <p>$116,97 CAD</p>
        </div>
      </div>
        </div>   
          <div className='sm:w-[100%] md:w-[50%]'>
            <h4 className='text-[1.9rem] font-bold'>Chuyến đi của bạn</h4>
            <div>
                <p className='mt-5'>
                    <span className='text-[1.8rem] font-bold'>Ngày:</span>
                   {dateRoom.startDate} tới {dateRoom.endDate}
                </p>
            </div>
            <div>
                <p className='my-5'>
                    <span className='text-[1.8rem] font-bold'>Khách:</span>
                   {dateRoom.customers}
                </p>
            </div>
            <hr />
            <div className='my-5'>
                <h4 className='text-[1.9rem] font-bold'>Chọn cách thanh toán</h4>
            <form action="">
                <div className='flex gap-3 mt-3'>
                            <input type="radio" name='check'/>
                <label htmlFor="">Thanh toán qua ATM</label>
                </div>
                <div className='flex gap-3 mt-3'>
                            <input type="radio" name='check'/>
                <label htmlFor="">Thanh toán qua MOMO</label>
                </div>
        
            </form>
            </div>
            
            <hr />
            <div className='mt-5'>
                <h4 className='text-[1.9rem] font-bold'>Thông tin thanh toán</h4>
            <div className="groupt-form mt-5">
                <label htmlFor="" className='block mb-3'>Họ Tên</label>
                <input type="text" value={user.name} className='p-3 w-[100%]' disabled/>
              
            </div>
            <div className="groupt-form mt-5">
                <label htmlFor="" className='block mb-3'>SDT</label>
                <input type="text"  value={user.phone} className='p-3 w-[100%]' disabled/>              
            </div>
            <div className='flex justify-between'>
            <ButtonPrimaryTwo width='10rem' height={3.5} className='my-6'>Quay lại</ButtonPrimaryTwo>
            <ButtonPrimary width='10rem' height={3.5} className='my-6'
            onClick={(e)=>{
              alertSuccess();
              setUserPay({  
              id: 0,
              maPhong: payRoom.idRoom,
              ngayDen: dateRoom.startDate,
              ngayDi: dateRoom.endDate,
              soLuongKhach: dateRoom.customers,
              maNguoiDung: user.id,})
            }}
       
            >Xác Nhận</ButtonPrimary>

            </div>
            </div>
        </div>   
          <div className='sm:hidden md:block sm:w-[45%] xl:w-[40%] 2xl:w-[35%] 2sm:h-[340px] md:h-[310px] border border-solid border-gray-400 rounded-[1rem] p-8'>
           <div className='flex gap-4 border-b border-solid border-gray-400 pb-7'>
            <img className=' sm:w-[100px] rounded-[1rem]' src={payRoom.imgRoom} alt="" />
            <div>
              <h5 className='font-bold text-[1.6rem]'>{payRoom.nameRoom}</h5>
              <p className='text-[1.4rem]'>Room in hotel</p>
              <p  className='text-[1.5rem] font-semibold'>${payRoom.priceRoom}</p>
            </div>
           </div>
           <div className='border-b border-solid border-gray-400 py-7'>
            <h4 className='font-bold text-[1.8rem] mb-3'>Chi tiết giá</h4>
            <div className='flex justify-between mb-2'>
                <p>${payRoom.priceRoom} x {countDay} đêm</p>
                <p>${payRoom.priceRoom*countDay}</p>
            </div>
          
            <div className='flex justify-between'>
                <p>Mã Giảm Giá(nếu có)</p>
                <p>{payRoom.discount}</p>
            </div>

          

           </div>
      <div>
        <div className='flex justify-between  py-7'>
          <p className='font-bold text-[1.6rem]'>Tổng cộng:</p>
          <p>${payRoom.priceRoom*countDay*(100-payRoom.discount)/100}</p>
        </div>
      </div>
        </div>   
        </div>
       
      </div>
    </Container>
  )
}

export default Pay
