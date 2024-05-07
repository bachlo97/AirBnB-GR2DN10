/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ProductItemLoading from './ProductItemLoading'
type Props={
    dataRooms:[]|any;
}
function ProductListLoading(props:Props) {
    
  return (
    <div className='flex gap-[1.2%] flex-wrap'>
       {
      props.dataRooms.map(()=>{
        return <ProductItemLoading />
      })
    }
    </div>
  )
}

export default ProductListLoading
