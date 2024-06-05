import { Input, Space, Table, Tag } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import qs from 'qs';
import { TLocaltion } from '@/services/localtion/Localtion.type';
import { IIFE } from '@/utils';
import { delLocation, getLocaltion, getLocaltionId } from '@/services/localtion/Localtion.service';
import { converToLocations } from '@/templates/user-template/components/header/search-bar/helper/ConvertToLocations';
import { ButtonPrimary } from '../../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { delAdminLocationThunk, getAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';
import ModalLocationEdit from './ModalLocationEdixt';
import '../css/style.css';
import { IoSearchOutline } from 'react-icons/io5';
function TableRender() {
  const { Search } = Input;

  const [data, setData] = useState<TLocaltion[]>([]);
  const listLocation: any = useAppSelector(
    (state) => state.locationSlice.listLocation,
  );
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
      title: "STT",
      dataIndex: "id",
      key: "id",

      sorter: (a:any, b:any) => a.id - b.id,
    },
    {
      title: "Hinh Ảnh",
      dataIndex: "hinhAnh",
      render: (imageUrl: string) => (
        <div className='flex justify-center'>
<img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: "100px" }} />
        </div>
        
      ),
    },
    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
    },

    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
    },
    {
      title: 'Chỉnh sửa',
      dataIndex: 'chinhSua',
      render: (text:string, record:any) => (
        <div className='flex gap-3 flex justify-center'>
          
                <ModalLocationEdit data={record} />
                  <ButtonPrimary width='100px' height={3.5} onClick={() => {
                    
                    dispatch(delAdminLocationThunk(record.id))
                    dispatch(getAdminLocationThunk(''))
               
                  }}>{"Xoá"}</ButtonPrimary>

        </div>
      ),
    },
  ];

  console.log();
  const userRef = useRef<any>(null);

  useEffect(() => {
    dispatch(getAdminLocationThunk(''));
  }, [dispatch]);
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
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
            dispatch(getAdminLocationThunk(e.target.value))
          }, 400);
        }}
      />
      <Table
        columns={columns}
        dataSource={listLocation}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        className='tablePrimary'
      />
    </div>
  );
}

export default TableRender;
