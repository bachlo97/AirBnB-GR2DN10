import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getRoomThunk } from '@/redux/room/Room.slice';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import ModalMoTa from '../Modal/ModalMoTa';
import { ButtonPrimary } from '@/components/Button/Button';

function TableRoom() {
    const [data, setData] =useState<[]>([]);
    const listRoom:any = useAppSelector((state) => state.roomSlice.listRoom);
    const dispatch = useAppDispatch();
    
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
            <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: '150px' }} />
          ), 
     
        },
        {
          title: 'tenPhong',
          dataIndex: 'tenPhong',
    
     
        },
    
        {
          title: 'khach',
          dataIndex: 'khach',
         
     
        },
        {
          title: 'Phòng Ngủ',
          dataIndex: 'phongNgu',
          
     
        },
        {
          title: 'Gường',
          dataIndex: 'giuong',
          
     
        },
        {
          title: 'Phòng Tắm',
          dataIndex: 'phongTam',
          
     
        },
        {
          title: 'Mô tả',
          dataIndex: 'quocGia',
          render(text:string, record:any) {
            console.log(record);
            
            return (
              <div className=''>
             <ModalMoTa data={record}/>
              </div>
            )
          }
     
        },
        {
          title: 'Giá Tiền',
          dataIndex: 'giaTien',
          
     
        },
        {
          title: 'Chỉnh Sua',
          dataIndex: 'quocGia',
          render(text:string,record:any){
            return (
              <div className='flex gap-3'>
                <ButtonPrimary width='80px' height={3} >Chỉnh sửa</ButtonPrimary>
                <ButtonPrimary width='80px' height={3}> Xoá</ButtonPrimary>
              </div>
            )
          }
     
        },
       
    
      ];
    
      
      console.log(listRoom);
      
      const [loading, setLoading] = useState(false);
      const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
      });
    
      

    
    useEffect(()=>{
    
      dispatch(getRoomThunk())
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
       
          dataSource={listRoom}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          
        />
        </div>
      )
}

export default TableRoom