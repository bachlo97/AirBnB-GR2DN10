import { ButtonPrimary } from '@/components/Button/Button';
import { delCommentThunk, getCommentThunk } from '@/redux/comment/Comment.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Breadcrumb, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function TableCommentId() {
    const { idPhong } = useParams();
    const [data, setData] =useState<[]>([]);
    const listCommentId:any = useAppSelector((state) => state.commentSlice.listComment);
    const dispatch = useAppDispatch();
    
    
      const columns = [
        {
          title: 'STT',
          dataIndex: 'id',
  
       
     
          
        },
        {
          title: 'Ngày Bình Luận',
          dataIndex: 'ngayBinhLuan',
  
        },
        {
          title: 'Người Bình Luận',
          dataIndex: 'tenNguoiBinhLuan',
         
        },
        {
          title: 'Nội Dung',
          dataIndex:'noiDung',
        
      
     
          
        },
        {
          title: 'Số Sao',
          dataIndex:'saoBinhLuan',
        
      
     
          
        },
       
        {
          title: 'Chỉnh sửa',
          dataIndex: 'chinhSua',
          render: (text:string, record:any) => (
          
            <div className='flex gap-3'>
              
                <button onClick={()=>{
                  const arr=[record,idPhong]
                  console.log(arr);
                  dispatch(delCommentThunk(arr))
                }}>Xoá</button>
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
    
      console.log(listCommentId);
      
    
    useEffect(()=>{
    dispatch(getCommentThunk(idPhong))

    },[dispatch, idPhong])
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
     {idPhong}
     <Breadcrumb
    items={[
      {
        title: 'Admin',
      },
   
      {
        title: 'Quản lý bình luận',
      },
    ]}
  />
     <h3 className='text-center text-[1.9rem] font-medium'>Quản lý bình luận</h3>
   <div className="flex justify-between items-center">
      <form action="" className='flex my-5'>
     <input type="text" className='border w-[200px] h-[30px] px-3 outline-none' placeholder='Nhập tìm kiếm'/>
     <ButtonPrimary width='75px' height={3} >Tìm Kiếm</ButtonPrimary>
   </form>

 
   </div>
   <Table
columns={columns}

dataSource={listCommentId}
pagination={tableParams.pagination}
loading={loading}
onChange={handleTableChange}
className='tablePrimary'

/>
    </div>

  )
}

export default TableCommentId
function dayjs() {
  throw new Error('Function not implemented.');
}

