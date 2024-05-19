/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment } from 'react'
import ProductItemLoading from './ProductItemLoading'
type Props={
    dataRooms:[]|any;
}
function ProductListLoading(props:Props) {
    
  return (
    <div className='flex gap-[1.2%] flex-wrap'>
       {
      props.dataRooms.map((_item:any,index:any)=>{
        return(<Fragment key={index}>
          <ProductItemLoading />
        </Fragment>) 
      })
    }
    </div>
  )
}

export default ProductListLoading
