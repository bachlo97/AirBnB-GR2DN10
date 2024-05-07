import  { useEffect, useState } from 'react'
import { TRoom } from '@/services/room/Room.type';
import { IIFE } from '@/utils';
import { getRooms } from '@/services/room/Room.service';
import { converToRooms } from './helpers/ConverToRooms';
import ProductItem from './productItem';
import ProductListLoading from './loading/ProductListLoading';


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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return  <ProductListLoading dataRooms={dataRooms}/>
    }
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
