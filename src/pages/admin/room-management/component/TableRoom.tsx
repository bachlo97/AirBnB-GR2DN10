import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { delRoomThunk, getRoomThunk } from "@/redux/room/Room.slice";
import { Input, Popconfirm, Table, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import ModalMoTa from "../Modal/ModalMoTa";
import ModalEditRoom from "../Modal/ModalEditRoom";
import { IoSearchOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";
import useAlertHook from "@/hooks/notification/Alert";

function TableRoom() {
  const { Search } = Input;
  const userRef = useRef<any>(null);
  const { alertSuccessCenter } = useAlertHook();

  const [, setData] = useState<[]>([]);
  const listRoom: any = useAppSelector((state) => state.roomSlice.listRoom);
  const dispatch = useAppDispatch();

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "id",

 
    },
    {
      title: "Hinh Ảnh",
      dataIndex: "hinhAnh",
      render: (imageUrl: string) => (
        <div className="flex justify-center">
          <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: "150px" }} />
        </div>
      ),
    },
    {
      title: "tenPhong",
      dataIndex: "tenPhong",
    },

    {
      title: "khach",
      dataIndex: "khach",
    },
    {
      title: "Phòng Ngủ",
      dataIndex: "phongNgu",
    },
    {
      title: "Gường",
      dataIndex: "giuong",
    },
    {
      title: "Phòng Tắm",
      dataIndex: "phongTam",
    },
    {
      title: "Mô tả",
      dataIndex: "quocGia",
      render(_: string, record: any) {
        console.log(record);

        return (
          <div className="">
            <ModalMoTa data={record} />
          </div>
        );
      },
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
    },
    {
      title: "Chỉnh Sua",
      dataIndex: "quocGia",
      render(_: string, record: any) {
        return (
          <div className="flex justify-center gap-3">
            <ModalEditRoom data={record} />

            <Popconfirm
              title="Bạn có muốn xóa "
              onConfirm={async () => {
                dispatch(delRoomThunk(record.id));
                alertSuccessCenter("Xoá dữ liệu thành công");
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
        );
      },
    },
  ];

  console.log(listRoom);

  const [loading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    dispatch(getRoomThunk(""));
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
  const dataRoom = listRoom.map((item:any, index:number) => ({
    ...item,
    stt: index + 1,

  }));

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
            dispatch(getRoomThunk(e.target.value));
          }, 400);
        }}
      />
      <Table
        //@ts-ignore
        columns={columns}
        dataSource={dataRoom}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        className="tablePrimary"
      />
    </div>
  );
}

export default TableRoom;
