import React, { useEffect, useState } from 'react'
import ProductItem from './productItem'
import { TRoom } from '@/services/room/Room.type';
import { IIFE } from '@/utils';
import { getRooms } from '@/services/room/Room.service';
import { converToRooms } from './helpers/ConverToRooms';

function ProductList() {
  const [dataRooms,setDataRooms]=useState<TRoom[]>([]);

  useEffect(()=>{
    IIFE(async()=>{
      try{
        const data=await getRooms();
        const content=data.content;
        setDataRooms(converToRooms(content));
      }catch(e){
        console.log(e);
        
      }
    })
  },[])
  return (
    <div className='flex gap-[1.2%] flex-wrap'>
    {
      dataRooms.map((item)=>{
        return <ProductItem 
          id={item.id}
          tenPhong={item.tenPhong} 
          khach={item.khach} 
          phongNgu={item.phongNgu} 
          giuong={item.giuong} 
          phongTam={item.phongTam} 
          giaTien={item.giaTien} 
          maViTri={item.maViTri} 
          hinhAnh={item.hinhAnh}        />
      })
    }
   
    </div>
  )
}

export default ProductList
