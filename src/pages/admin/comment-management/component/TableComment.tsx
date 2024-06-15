import { getCommentThunkAll } from "@/redux/comment/Comment.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Input, Table, Tooltip } from "antd";
import { useEffect, useState, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GrView } from "react-icons/gr";
function TableComment() {
  const [, setData] = useState<[]>([]);
  const listRoomAll: any = useAppSelector((state) => state.roomSlice.listRoom);
  const dispatch = useAppDispatch();
  const { Search } = Input;
  const userRef = useRef<any>(null);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
    },
    {
      title: "Mã Phòng",
      dataIndex: "id",
    },
    {
      title: "Hinh Ảnh",
      dataIndex: "hinhAnh",
      render: (imageUrl: string) => (
        <div className="flex justify-center gap-3">
                  <img src={imageUrl} alt="Hình ảnh" style={{ maxWidth: "100px" }} />
        </div>

      ),
    },
    {
      title: "tenPhong",
      dataIndex: "tenPhong",
    },

    {
      title: "Chỉnh sửa",
      dataIndex: "chinhSua",
      render: (_: string, record: any) => (
        <div className="flex justify-center gap-3">
          <NavLink to={`listComment/${record.id}`} onClick={() => {}}>
            <Tooltip title="Xem thêm">
              <GrView />
            </Tooltip>
          </NavLink>
        </div>
      ),
    },
  ];

  const [loading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    dispatch(getCommentThunkAll(""));
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
  const dataRoom = listRoomAll.map((item:any, index:number) => ({
    ...item,
    stt: index + 1,

  }));
  return (
    <>
   

      <Table
        columns={columns}
        dataSource={dataRoom}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        className="tablePrimary"
      />
    </>
  );
}

export default TableComment;
