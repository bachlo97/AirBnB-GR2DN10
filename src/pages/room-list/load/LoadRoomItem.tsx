import { SProductItemText } from '@/pages/home/product/productList/Product.style'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

function LoadRoomItem() {
  return (
    <div className='sm:w-[100%] ssm:w-[49%] xl:w-[32%]'>  
    <div>
 <div className='relative mt-4'>
  <Skeleton className='rounded-[1rem] w-[100%]'  style={{height:'250px'}}/>
  {/* <Skeleton className='absolute top-[5%] right-[5%] text-[2.5rem] text-white' /> */}

 </div>
  
 
  <SProductItemText className="py-3">
      <Skeleton className='text-[1.8rem] font-semibold w-[100%] h-[30px]'></Skeleton>
      <Skeleton className="stars flex items-center sm:text-[1.2rem] md:text-[1.5rem] w-[200px] h-[30px] mt-3"></Skeleton>
      <Skeleton className='font-bold text-[1.8rem] w-[150px] h-[30px] mb-3 relative top-[-18px]'></Skeleton>
     <div className="product-icons flex gap-3 relative top-[-18px]">
     <Skeleton className='flex items-center w-[30px] h-[30px]'></Skeleton>
         <Skeleton className='flex items-center w-[30px] h-[30px]'></Skeleton>
         <Skeleton className='flex items-center w-[30px] h-[30px]'></Skeleton>
     
 
     

     </div>
    
  </SProductItemText>
</div></div>
  )
}

export default LoadRoomItem
