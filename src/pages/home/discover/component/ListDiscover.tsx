import { TLocaltion } from '@/services/localtion/Localtion.type'
import React from 'react'
import DiscoverItem from './DiscoverItem'

function ListDiscover(props:any) {
  return (
    <div className='flex flex-wrap gap-[1%]'>
      {props.dataLocations.map((item:TLocaltion,index:string)=>{
        return (
            <div key={index} className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative'>
    <DiscoverItem
                    id={item.id}
                    hinhAnh={item.hinhAnh}
                    tenViTri={item.tenViTri}
                    tinhThanh={item.tinhThanh} quocGia={''}    />
        </div>
        )
    })}
    </div>
  )
}

export default ListDiscover