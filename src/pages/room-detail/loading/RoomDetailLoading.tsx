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

    
      <InformationDetailLoading />
      {/* Bình luận */}
      <div className='2xl:w-3/4 mx-auto mt-8 border-t border-solid py-5'>
        <h3 className='font-semibold text-3xl mb-6'>Đánh giá</h3>
        <div className='border-b border-solid'>
          <div className='flex gap-5'>
            <SImg>
              <Skeleton className='w-[100%] h-[100%] bg-cover'/>
            </SImg>
            <div>
              <Skeleton width={50} height={30}></Skeleton>
              <Skeleton width={200} height={30} className='my-5'></Skeleton>
              <Skeleton width={170} height={30}></Skeleton>
            </div>
          </div>
          
        </div>
        <form action="" method="post" className='flex w-[100%] my-5 gap-5'>
        <Skeleton width={50} height={50}></Skeleton>
          <div className="w-[100%] group-form">
          <Skeleton width='100%' height='10rem' className='my-5'></Skeleton>
  
          </div>

        </form>
      </div>

    </Container>

 
  </Fragment>
  )
}

export default RoomDetailLoading
