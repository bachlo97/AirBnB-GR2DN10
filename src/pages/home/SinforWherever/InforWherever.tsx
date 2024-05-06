import { Container } from '@/components/StyleCompoment/StyleCompoment'
import React from 'react'
import { DataWherever } from './Data/DataWherever'

function InforWherever() {
  const DataItem=DataWherever.map((item,index)=>{
    return (
      <div className='sm:w-[100%] 2sm:w-[49%] lg:w-[24%] mt-3' key={index}>
      <img style={{height:'250px',borderRadius:'1rem'}} src={item.img} alt={item.title} />
      <div className="text">
      <h5 className='mt-3 font-bold text-[1.8rem]'>{item.title}</h5>
      </div>
      </div>
    
    )
  })
  return (
    <Container>
        <div className='my-3'>
        <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'>Ở bất cứ đâu</h3>
        <div className='flex flex-wrap justify-between' >
           {DataItem}

         
</div>
    </div>  
    </Container>
  
  )
}

export default InforWherever
