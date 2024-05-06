/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ProductItemRoom from './ProductItemRoom'
import { TRoom } from '@/services/room/Room.type'

function ListProductRoom(props: { data: any[] }) {
  
    return (
    <div className='flex gap-[1%] flex-wrap'>
    {props.data.map((item:any)=>{
        return <ProductItemRoom 
        id={item.id}
        tenPhong={item.tenPhong} 
        khach={item.khach} 
        phongNgu={item.phongNgu} 
        giuong={item.giuong} 
        phongTam={item.phongTam} 
        giaTien={item.giaTien} 
        maViTri={item.maViTri} 
        hinhAnh={item.hinhAnh}  
        />
    })}
    
    </div>
  )
}

export default ListProductRoom
