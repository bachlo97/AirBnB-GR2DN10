import React from 'react'
import { FaRegHeart, FaRegUser, FaStar } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { MdBedroomChild } from 'react-icons/md';
import { SProductItem, SProductItemText } from './Product.style';

function ProductItem() {
    const truncateText=(text:string)=> {
        if (text.length <= 30) {
          return text;
        } else {
          return text.substring(0, 30) + "...";
        }
      }
  return (
    <div className='sm:w-[100%] ssm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-[1.5rem]'>
      <div>
       <div className='relative'>
        <img  style={{height:'200px'}} src="https://airbnbnew.cybersoft.edu.vn/images/phong12.png" alt="" />
        <FaRegHeart className='absolute top-[5%] right-[5%] text-[2.5rem] text-white' />

       </div>
        
       
        <SProductItemText className="text p-3">
            <h4 className='text-[1.8rem] font-semibold'>
              {
                truncateText('Toàn bộ quê hương phải của Gi ngay trung tâm Cần Thơ')
            }   
            </h4>
            <div className="stars flex items-center sm:text-[1.2rem] md:text-[1.5rem] mb-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            (3 người đánh giá)
            </div>
           <p className='font-bold text-[1.8rem]'>$240 đêm</p>
           <div className="product-icons flex gap-3">
            <div className='flex items-center'><IoBedOutline />:3</div>
            <div className='flex items-center'> <MdBedroomChild />:2</div>
            <div className='flex items-center'>  <FaRegUser />:1</div>
           
       
           

           </div>
          
        </SProductItemText>
      </div>
    </div>
  )
}

export default ProductItem
