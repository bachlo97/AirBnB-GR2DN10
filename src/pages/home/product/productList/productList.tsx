import React from 'react'
import ProductItem from './productItem'

function ProductList() {
  return (
    <div className='flex gap-[1.2%] flex-wrap'>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>
  )
}

export default ProductList
