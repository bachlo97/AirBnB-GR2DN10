import { ButtonPrimary } from '@/components/Button/Button'
import { Breadcrumb } from 'antd'
import React, { useRef } from 'react'
import TableRoom from './component/TableRoom'
import ModalAddRoom from './Modal/ModalAddRoom'

type Props = {}

export default function RoomManagement(props: object) {
  const addUserRef = useRef<HTMLButtonElement>(null)

  return (
    <div>
    <Breadcrumb
       items={[
         {
           title: 'Admin',
         },
      
         {
           title: 'Quản lý thông tin phòng',
         },
       ]}
     />
   
     <h3 className='text-center text-[1.9rem] font-medium'>Quản lý thông tin phòng</h3>
     <div className="flex justify-between items-center">
        <form action="" className='flex my-5'>
       <input type="text" className='border w-[200px] h-[30px] px-3 outline-none' placeholder='Nhập tìm kiếm'/>
       <ButtonPrimary width='75px' height={3} >Tìm Kiếm</ButtonPrimary>
     </form>
       <ModalAddRoom/>

     </div>
   
     <TableRoom/>
     
       </div>
   
  )
}