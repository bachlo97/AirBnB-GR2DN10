import { TLocaltion } from '@/services/localtion/Localtion.type'
import React from 'react'

function DiscoverItem(props:TLocaltion) {
  return (
    <div>
    <img style={{height:'150px',borderRadius:'3rem'}} src={props.hinhAnh} alt={props.tenViTri} />
<div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
    <h4 className='text-3xl font-medium'>
        {props.tenViTri}
        </h4>
    <p className='text-2xl'>{props.tinhThanh}</p>
</div> 
</div>
  )
}

export default DiscoverItem
