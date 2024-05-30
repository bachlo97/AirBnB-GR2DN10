import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import qs from 'qs';
import { TLocaltion } from '@/services/localtion/Localtion.type';
import { IIFE } from '@/utils';
import { delLocation, getLocaltion, getLocaltionId } from '@/services/localtion/Localtion.service';
import { converToLocations } from '@/templates/user-template/components/header/search-bar/helper/ConvertToLocations';
import { ButtonPrimary } from '../../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { delAdminLocationThunk, getAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';
import ModalLocationEdit from './ModalLocationEdixt';
function TableRender() {
const [data, setData] =useState<TLocaltion[]>([]);
const listLocation:any = useAppSelector((state) => state.locationSlice.listLocation);
const dispatch = useAppDispatch();
const [loading, setLoading] = useState(false);
const [tableParams, setTableParams] = useState({
  pagination: {
    current: 1,
    pageSize: 10,
  },
});


  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
   
      render: (id:number, record:string, index:any) => {
        const reverseIndex = index+1 // Tính số thứ tự ngược
        return reverseIndex;
      },
      
    },
    {
      title: 'Hinh Ảnh',
      dataIndex: 'hinhAnh',
       render: (imageUrl:string) => (
        <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: '100px' }} />
      ), 
 
    },
    {
      title: 'Tên Vị Trí',
      dataIndex: 'tenViTri',

 
    },

    {
      title: 'Tỉnh Thành',
      dataIndex: 'tinhThanh',
     
 
    },
    {
      title: 'Quốc Gia',
      dataIndex: 'quocGia',
      
 
    },
    {
      title: 'Chỉnh sửa',
      dataIndex: 'chinhSua',
      render: (text:string, record:any) => (
        <div className='flex gap-3'>
          
                <ModalLocationEdit data={record} />
                  <ButtonPrimary width='100px' height={3.5} onClick={() => {
                    
                    dispatch(delAdminLocationThunk(record.id))
                    dispatch(getAdminLocationThunk())
               
                  }}>{"Xoá"}</ButtonPrimary>

        </div>
      ),
 
    },

  ];

  

  

console.log();

useEffect(()=>{

  dispatch(getAdminLocationThunk())
},[dispatch])
  const handleTableChange = (pagination:any, filters:any, sorter:any) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <div>
 <Table
      columns={columns}
   
      dataSource={listLocation}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      
    />
    </div>
  )
}

export default TableRender

