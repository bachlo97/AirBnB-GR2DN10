import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { delRoomThunk, getRoomThunk } from '@/redux/room/Room.slice';
import { Input, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import ModalMoTa from '../Modal/ModalMoTa';
import { ButtonPrimary } from '@/components/Button/Button';
import ModalEditRoom from '../Modal/ModalEditRoom';
import { IoSearchOutline } from 'react-icons/io5';

function TableRoom() {
  const { Search } = Input;
  const userRef = useRef<any>(null);

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
            <div className="flex justify-center">
                          <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: '150px' }} />

            </div>
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
              <div className='flex gap-3 justify-center'>
               
                <ModalEditRoom
                data={record}
                />
                <ButtonPrimary width='80px' height={3}
                onClick={()=>{
              
                  dispatch(delRoomThunk(record.id))
                }}
                > Xoá</ButtonPrimary>
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
    
      dispatch(getRoomThunk(''))
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
            <Search
        className="mb-4"
        placeholder="input search room code"
        allowClear
        enterButton={<IoSearchOutline />}
        size="large"
        onChange={async (e) => {
          if (userRef.current) {
            clearTimeout(userRef.current);
          }
          userRef.current = setTimeout(async () => {
            console.log(e.target.value);
            dispatch(getRoomThunk(e.target.value))
          }, 400);
        }}
      />
     <Table
          columns={columns}
       
          dataSource={listRoom}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          className='tablePrimary'
        />
        </div>
      )
}

export default TableRoom
