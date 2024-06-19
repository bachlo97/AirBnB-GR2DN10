import { Input, Popconfirm, Table, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";

import { TLocaltion } from "@/services/localtion/Localtion.type";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  delAdminLocationThunk,
  getAdminLocationThunk,
} from "@/redux/admin-location/AdminLocation.slice";
import ModalLocationEdit from "./ModalLocationEdixt";
import "../css/style.css";
import { IoSearchOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import useAlertHook from "@/hooks/notification/Alert";
import { getRoomThunkId } from "@/redux/room/Room.slice";
import ScrollToTopButton from "@/components/button-to-top/ButtonToTop";
function TableRender() {
  const { Search } = Input;
  const { alertSuccessCenter,alertErrorCenter} = useAlertHook();

  const [, setData] = useState<TLocaltion[]>([]);
  const listLocation: any = useAppSelector(
    (state) => state.locationSlice.listLocation,
  );

  const dispatch = useAppDispatch();
  const [loading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "id",

      sorter: (a: any, b: any) => a.id - b.id,
    },
 
    {
      title: "Hinh Ảnh",
      dataIndex: "hinhAnh",
      render: (imageUrl: string) => (
        <div className="flex justify-center">
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
      title: "Chỉnh sửa",
      dataIndex: "chinhSua",
      render: (_: string, record: any) => (
        <div className="flex justify-center gap-3">
          <ModalLocationEdit data={record} />

          <Popconfirm
            title="Bạn có muốn xóa "
            onConfirm={async () => {
          
              const listRoomLocaltion=await dispatch(getRoomThunkId(record.id));
              if(listRoomLocaltion.payload.length>0){

                alertErrorCenter('Xoá thất bại vì địa chỉ đã có phòng nên xoá phòng trước')
                

              }else{
          dispatch(delAdminLocationThunk(record.id));
              dispatch(getAdminLocationThunk(""));
              alertSuccessCenter("Xoá dữ liệu thành công");
                
              }
              
            }}
            cancelText="Huỷ"
            okText="Chắn chắn"
          >
            <span
              className={" mr-3 cursor-pointer text-[20px] text-red-500"}
              onClick={async () => {}}
            >
              <Tooltip title="Xoá">
                <TiDelete />
              </Tooltip>
            </span>
          </Popconfirm>
        </div>
      ),
    },
  ];

 
  const userRef = useRef<any>(null);
  const dataLocation = listLocation.map((item:any, index:number) => ({
    ...item,
    stt: index + 1,
   
  }));
  useEffect(() => {
    dispatch(getAdminLocationThunk(""));
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
        placeholder="Mời bạn nhập tên phòng"
        allowClear
        enterButton={<IoSearchOutline />}
        size="large"
        onChange={async (e) => {
          if (userRef.current) {
            clearTimeout(userRef.current);
          }
          userRef.current = setTimeout(async () => {
            console.log(e.target.value);
            dispatch(getAdminLocationThunk(e.target.value));
          }, 400);
        }}
      />
      <Table
        columns={columns}
        dataSource={dataLocation}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        className="tablePrimary"
      />
   
    </div>
  );
}

export default TableRender;
