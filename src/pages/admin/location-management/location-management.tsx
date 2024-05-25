import { Breadcrumb } from 'antd'
import React from 'react'
import { ButtonPrimary, ButtonPrimaryTwo } from '../../../components/Button/Button';
import TableRender from './component/TableRender';
import { NavLink } from 'react-router-dom';
import ModalLocation from './component/ModalLocation';

type Props = {}

export default function LocationManagement({}: Props) {
  return (
    <div>
 <Breadcrumb
    items={[
      {
        title: 'Admin',
      },
   
      {
        title: 'Quản lý thông tin vị trí',
      },
    ]}
  />

  <h3 className='text-center text-[1.9rem] font-medium'>Quản lý vị trí</h3>
  <div className="flex justify-between items-center">
     <form action="" className='flex my-5'>
    <input type="text" className='border w-[200px] h-[30px] px-3 outline-none' placeholder='Nhập tìm kiếm'/>
    <ButtonPrimary width='75px' height={3} >Tìm Kiếm</ButtonPrimary>
  </form>

<ModalLocation/>
  </div>

    <TableRender/>
  
    </div>
  )
}