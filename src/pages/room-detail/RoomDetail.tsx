import { Container } from '@/components/StyleCompoment/StyleCompoment';

import { Fragment, useEffect, useState } from 'react';
import { BsTranslate } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import InformationDetailRoom from './compoment/InformationDetailRoom';
import { ButtonPrimary } from '@/components/Button/Button';
import { SImg } from './Detail.style';
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { TRoomDetail } from '@/services/room-detail/RoomDetail.type';
import { IIFE } from '@/utils';
import { GetRoomDetail } from '@/services/room-detail/RoomDetail.service';
import { converToRoomDetail } from './helpers/ConverToRoomDetail';


type Props = object

const RoomDetail = (_props: Props) => {
  const { id } = useParams();
  const [dataRoomDetail,setDataRoomDetail]=useState<TRoomDetail>({})
  useEffect(()=>{
    IIFE(async ()=>{
      try{
        const data=await GetRoomDetail(id);
        const content=data.content;
        setDataRoomDetail(content)
      }catch(e){
        console.log(e);
        
      }
    })
  },[id])
  return (
    <Fragment>
  

    <Container>
      <div className=' justify-between mb-4 sm:hidden 2sm:flex'>
        <div className='flex gap-3 items-center'>
          <BsTranslate className='text-4xl' />
          <h3 className='font-bold md:text-3xl lg:text-4xl'>{dataRoomDetail.tenPhong}</h3>

        </div>
        <div className='flex gap-4'>
          <div className='flex gap-3 items-center'>
            <IoShareOutline />
            Chia sẽ
          </div>
          <div className='flex gap-3 items-center'>
            <CiHeart />

            Yêu thích
          </div>
        </div>

      </div>
      <div className='relative'>
        <div className='absolute top-3 left-4 flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] 2sm:hidden'>
          <IoIosArrowBack />


        </div>
        <img src={dataRoomDetail.hinhAnh} className='rounded-[1.5rem] w-[100%] sm:h-[200px] 2sm:h-[100%] mb-3' alt="" />
        <div className='icons flex gap-3 text-3xl absolute top-3 text-black right-8 2sm:hidden'>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
            <IoShareOutline />

          </div>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
            <CiHeart />

          </div>
        </div>
      </div>

      {/* Thông tin chi tiết và thanh toán */}
      <InformationDetailRoom data={dataRoomDetail}/>
      {/* Bình luận */}
      <div className='2xl:w-3/4 mx-auto mt-8 border-t border-solid py-5'>
        <h3 className='font-semibold text-3xl mb-6'>Đánh giá</h3>
        <div className='border-b border-solid'>
          <div className='flex gap-5'>
            <SImg>
              <img className='w-[100%] h-[100%] bg-cover ' src="https://yt3.ggpht.com/Lw90L5d4JrRQGyUInde_DyOdHWJKjG0g8CvWzQkjXamdTkdg2QgiZy6VzPVmtoNgwiFmXTvVlw=s48-c-k-c0x00ffffff-no-rj" alt="" />
            </SImg>
            <div>
              <h4>Phạm Duy</h4>
              <p>Tháng 6 năm 2022</p>
            </div>
          </div>
          <div className='my-5'>Mọi thứ đều ok nha</div>
        </div>
        <form action="" method="post" className='flex w-[100%] my-5 gap-5'>
          <SImg>
            <img className='w-[10rem]' src="https://yt3.ggpht.com/Lw90L5d4JrRQGyUInde_DyOdHWJKjG0g8CvWzQkjXamdTkdg2QgiZy6VzPVmtoNgwiFmXTvVlw=s48-c-k-c0x00ffffff-no-rj" alt="" />
          </SImg>
          <div className="w-[100%] group-form">
            <textarea name="" id="" className='border w-[100%] h-[20rem] px-4 py-3 outline-none'></textarea> <br />
            <div className='text-right'>
              <ButtonPrimary width='150px' height={3.5} type="submit">Thêm Bình Luận</ButtonPrimary>

            </div>
          </div>

        </form>
      </div>
    </Container>

 
  </Fragment>
  )
}

export default RoomDetail