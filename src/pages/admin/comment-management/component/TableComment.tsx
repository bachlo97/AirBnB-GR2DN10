import { getCommentThunkAll } from '@/redux/comment/Comment.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react'

function TableComment() {
    const [data, setData] =useState<[]>([]);
    const listCommentAll:any = useAppSelector((state) => state.commentSlice.listCommentAll);
    const dispatch = useAppDispatch();
    
      const columns = [
        {
          title: 'STT',
          dataIndex: 'id',
  
       
     
          
        },
        {
          title: 'maPhong',
          dataIndex:'maPhong',
        
          render:(text:string)=>{
            <div>
            {text}
               
            </div>
          }
     
          
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
        <div className="border border-black border-solid">
     {/* <Table
          columns={columns}
       
          dataSource={listCommentAll}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          
        /> */}
<table className='w-[100%]'>
  <thead>
    <tr>
      <th>STT</th>
      <th>Tên</th>
      <th>Số Lượng</th>
      <th>Chỉnh sửa</th>
    </tr>
  </thead>
  <tbody>
   <tr className='text-center'>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>Xem Thêm</td>
   </tr>
  </tbody>
</table>
        </div>
      )
}

export default TableComment
