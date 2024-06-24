import { ButtonPrimary, ButtonPrimaryTwo } from '@/components/Button/Button'
import { Container } from '@/components/style-compoment/Container'
import { IoIosArrowBack } from 'react-icons/io'
import usePayHook from './hooks/usePayHook'
import { useAppSelector } from '@/redux/hooks';
import { ROOM_DETAIL_PATH } from '@/router/router.config';
import { useTranslation } from "react-i18next";


function Pay() {
  const { t } = useTranslation();

 const {countDay,user,dateRoom,payRoom,navigate,handleSubmit}=usePayHook();
 const roomID: any = useAppSelector(
  (state) => state.GetCartsRoomSlice.idRoom,
);


  return (
    <Container>
      <div className='sm:w-[95%] xl:w-[75%] 2xl:w-[65%] mx-auto'>
        <h3 className='text-[2.3rem] font-bold flex items-center gap-3'>
        <IoIosArrowBack className='text-[1.8rem]'/>

         {t("pagePay.confirmation")}</h3>
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
            <h4 className='font-bold text-[1.8rem] mb-3'>{t("pagePay.detailPrice")}</h4>
            <div className='flex justify-between mb-2'>
                <p>${payRoom.priceRoom} x {countDay} đêm</p>
                <p>${payRoom.priceRoom*countDay}</p>
            </div>
          
            <div className='flex justify-between'>
                <p>{t("pageDetail.deal")}</p>
                <p>{payRoom.discount}%</p>
            </div>

          

           </div>
      <div>
        <div className='flex justify-between  py-7'>
          <p className='font-bold text-[1.6rem]'>{t("pagePay.total")}:</p>
          <p>${payRoom.priceRoom*countDay*(100-payRoom.discount)/100}</p>
        </div>
      </div>
        </div>   
          <div className='sm:w-[100%] md:w-[50%]'>
            <h4 className='text-[1.9rem] font-bold'> {t("pagePay.yourTrip")}</h4>
            <div>
                <p className='mt-5'>
                    <span className='text-[1.8rem] font-bold'> {t("pagePay.day")}:</span>
                   {dateRoom.startDate}  {t("pagePay.to")} {dateRoom.endDate}
                </p>
            </div>
            <div>
                <p className='my-5'>
                <span className='text-[1.8rem] font-bold'> {t("pagePay.guest")}:</span>
                   {dateRoom.customers}
                </p>
            </div>
            <hr />
            <div className='my-5'>
                <h4 className='text-[1.9rem] font-bold'> {t("pagePay.choosePayment")}</h4>
            <form action="">
                <div className='flex gap-3 mt-3'>
                            <input type="radio" name='check'/>
                <label htmlFor=""> {t("pagePay.paymentATM")}</label>
                </div>
                <div className='flex gap-3 mt-3'>
                            <input type="radio" name='check'/>
                <label htmlFor="">{t("pagePay.paymentMoMo")}</label>
                </div>
        
            </form>
            </div>
            
            <hr />
            <div className='mt-5'>
                <h4 className='text-[1.9rem] font-bold'>  {t("pagePay.billingInformation")}</h4>
            <div className="groupt-form mt-5">
                <label htmlFor="" className='block mb-3'>  {t("pagePay.fullName")}</label>
                <input type="text" value={user.name} className='p-3 w-[100%]' disabled/>
              
            </div>
            <div className="groupt-form mt-5">
                <label htmlFor="" className='block mb-3'>  {t("pagePay.phone")}</label>
                <input type="text"  value={user.phone} className='p-3 w-[100%]' disabled/>              
            </div>
            <div className='flex justify-between'>
            <ButtonPrimaryTwo width='10rem' height={3.5} className='my-6'
            onClick={()=>{
              navigate(`/${ROOM_DETAIL_PATH}/${roomID}`)
            }}
            >{t("pagePay.back")}</ButtonPrimaryTwo>
            <ButtonPrimary width='10rem' height={3.5} className='my-6'
            onClick={()=>{
              handleSubmit();
              
          
            }}
       
            >{t("pagePay.confirm")}</ButtonPrimary>

            </div>
            </div>
        </div>   
          <div className='sm:hidden md:block sm:w-[45%] xl:w-[40%] 2xl:w-[40%] 2sm:h-[340px] md:h-[310px] border border-solid border-gray-400 rounded-[1rem] p-8'>
           <div className='flex gap-4 border-b border-solid border-gray-400 pb-7'>
            <img className=' sm:w-[100px] rounded-[1rem]' src={payRoom.imgRoom} alt="" />
            <div>
              <h5 className='font-bold text-[1.6rem]'>{payRoom.nameRoom}</h5>
              <p className='text-[1.4rem]'>Room in hotel</p>
              <p  className='text-[1.5rem] font-semibold'>${payRoom.priceRoom}</p>
            </div>
           </div>
           <div className='border-b border-solid border-gray-400 py-7'>
            <h4 className='font-bold text-[1.8rem] mb-3'>{t("pagePay.detailPrice")}</h4>
            <div className='flex justify-between mb-2'>
                <p>${payRoom.priceRoom} x {countDay} {t("pageDetail.night")}</p>
                <p>${payRoom.priceRoom*countDay}</p>
            </div>
          
            <div className='flex justify-between'>
            <p>{t("pageDetail.deal")}</p>
                <p>{payRoom.discount}%</p>
            </div>

          

           </div>
      <div>
        <div className='flex justify-between  py-7'>
          <p className='font-bold text-[1.6rem]'>{t("pagePay.total")}:</p>
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
