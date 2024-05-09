import { Container } from '@/components/style-compoment/Container'
import React, { Fragment } from 'react'
import { SImg } from '../Detail.style'
import Skeleton from 'react-loading-skeleton'
import InformationDetailLoading from './InformationDetailLoading'

function RoomDetailLoading() {

  return (
    <Fragment>
  

    <Container>
      <div className=' justify-between mb-4 sm:hidden 2sm:flex'>
        <div className='flex gap-3 items-center'>
          <Skeleton className='text-4xl w-[50px] h-[35px]' />
          <Skeleton className='font-bold md:text-3xl lg:text-4xl w-[300px] h-[35px]'></Skeleton>

        </div>
        <div className='flex gap-4'>
          <Skeleton className='flex gap-3 items-center w-[75px] h-[35px]'>
       
          </Skeleton>
          <Skeleton className='flex gap-3 items-center w-[75px] h-[35px]'>
       
          </Skeleton>
        </div>

      </div>
      <div className='relative'>
        <div className='absolute top-3 left-4 flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] 2sm:hidden'>
      


        </div>
        <Skeleton className='rounded-[1.5rem] w-[100%] h-[550px]  mb-3' />
        <div className='icons flex gap-3 text-3xl absolute top-3 text-black right-8 2sm:hidden'>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
        

          </div>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
         

          </div>
        </div>
      </div>

      {/* Thông tin chi tiết và thanh toán */}
      <InformationDetailLoading />
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
              {/* <ButtonPrimary width='150px' height={3.5} type="submit">Thêm Bình Luận</ButtonPrimary> */}

            </div>
          </div>

        </form>
      </div>

    </Container>

 
  </Fragment>
  )
}

export default RoomDetailLoading
