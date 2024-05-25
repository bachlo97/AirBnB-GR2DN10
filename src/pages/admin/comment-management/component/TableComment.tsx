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
        <div>
     <Table
          columns={columns}
       
          dataSource={listCommentAll}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          
        />
        </div>
      )
}

export default TableComment
