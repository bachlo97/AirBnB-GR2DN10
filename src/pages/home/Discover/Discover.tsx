
import { Container } from '@/components/StyleCompoment/StyleCompoment';
import { DataDiscover } from './Data/DataDiscover';
import { useEffect, useState } from 'react';
import { TLocaltion } from '@/services/localtion/Localtion.type';
import { IIFE } from '@/utils';
import { getLocaltionsPage } from '@/services/localtion/LocationsPage';
import { converToLocationsPages } from './helpers/ConverToDiscover';

function Discover() {
  const [dataLocations,setDataLocations]=useState<TLocaltion[]>([])
  useEffect(()=>{
    IIFE(async()=>{
      try{
        const data=await getLocaltionsPage();
        const content=data.content.data;
        setDataLocations(converToLocationsPages(content))
      }catch(e){
        console.log({e});
        
      }
    })
  })
    const renderData=dataLocations.map((item,index)=>{
        return (
            <div key={index} className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative'>
            <img style={{height:'150px',borderRadius:'3rem'}} src={item.hinhAnh} alt={item.tenViTri} />
        <div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
            <h4 className='text-3xl font-medium'>
                {item.tenViTri}
                </h4>
            <p className='text-2xl'>{item.tinhThanh}</p>
        </div> 
        </div>
        )
    })
  return (
    <Container>
        <div className='my-3'>
      <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'>Khám phá những địa điểm gần đây</h3>
      <div className='flex flex-wrap gap-[1%]' >
       {renderData}
       {/* <div className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative'>
            <img style={{height:'150px',borderRadius:'3rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBrloD5EpDYmIR-8sbWawEcdNlVuAd1yb2g&s' alt='Phu quoc' />
        <div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
            <h4 className='text-3xl font-medium'>
            Phú Quốc
                </h4>
            <p className='text-2xl'>Phú Quốc</p>
        </div> 
        </div> */}
      
      
      </div>
   
     
    </div>  
    </Container>
  
  )
}

export default Discover
