import { getCommentThunkAll } from '@/redux/comment/Comment.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function TableComment() {
    const [data, setData] =useState<[]>([]);
    const listRoomAll:any = useAppSelector((state) => state.roomSlice.listRoom);
    const dispatch = useAppDispatch();
    
    
      const columns = [
        {
          title: 'STT',
          dataIndex: 'id',
  
       
     
          
        },
        {
          title: 'Hinh Ảnh',
          dataIndex: 'hinhAnh',
           render: (imageUrl:string) => (
            <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: '100px' }} />
          ), 
     
        },
        {
          title: 'tenPhong',
          dataIndex:'tenPhong',
        
      
     
          
        },
       
        {
          title: 'Chỉnh sửa',
          dataIndex: 'chinhSua',
          render: (text:string, record:any) => (
            <div className='flex gap-3'>
              
                      <NavLink to={`listComment/${record.id}`} onClick={()=>{
                        
                      }}>Xem Thêm</NavLink>
            </div>
          ),
     
        },
    
      ];
    
      
    
      const [loading, setLoading] = useState(false);
      const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
      });
    
      
    
    useEffect(()=>{
    
      dispatch(getCommentThunkAll())
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

<Table
columns={columns}

dataSource={listRoomAll}
pagination={tableParams.pagination}
loading={loading}
onChange={handleTableChange}

/>
      )
}

export default TableComment
