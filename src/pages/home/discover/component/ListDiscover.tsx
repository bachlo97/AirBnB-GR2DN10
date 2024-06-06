import { TLocaltion } from '@/services/localtion/Localtion.type'
import React from 'react'
import DiscoverItem from './DiscoverItem'
import { NavLink } from 'react-router-dom'
function ListDiscover(props:any) {
  return (
    <div className='flex flex-wrap gap-[1%]'>
      {props.dataLocations.slice(0,10).map((item:TLocaltion,index:string)=>{
        return (
            <NavLink key={index} to={`roomlist/${item.id}`}
             className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative box-itemDiscover
            
             
             '>
    <DiscoverItem
                    id={item.id}
                    hinhAnh={item.hinhAnh}
                    tenViTri={item.tenViTri}
                    tinhThanh={item.tinhThanh} quocGia={''}    />
        </NavLink>
        )
    })}
    </div>
  )
}

export default ListDiscover