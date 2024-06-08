import { ButtonPrimary } from "@/components/Button/Button";
import useAlertHook from "@/hooks/notification/Alert";
import {
  delCommentThunk,
  getCommentThunk,
} from "@/redux/comment/Comment.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Breadcrumb, Popconfirm, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useParams } from "react-router-dom";

function TableCommentId() {
  const { idPhong } = useParams();
  const { alertSuccessCenter } = useAlertHook();

  const [data, setData] = useState<[]>([]);
  const listCommentId: any = useAppSelector(
    (state) => state.commentSlice.listComment,
  );
  const dispatch = useAppDispatch();

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
    },
    {
      title: "Ngày Bình Luận",
      dataIndex: "ngayBinhLuan",
    },
    {
      title: "Người Bình Luận",
      dataIndex: "tenNguoiBinhLuan",
    },
    {
      title: "Nội Dung",
      dataIndex: "noiDung",
    },
    {
      title: "Số Sao",
      dataIndex: "saoBinhLuan",
    },

    {
      title: "Chỉnh sửa",
      dataIndex: "chinhSua",
      render: (text: string, record: any) => (
        <div className="flex justify-center gap-3">
          <Popconfirm
            title="Bạn có muốn xóa "
            onConfirm={async () => {
              const arr = [record, idPhong];

              dispatch(delCommentThunk(arr));
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

  useEffect(() => {
    dispatch(getCommentThunk(idPhong));
  }, [dispatch, idPhong]);
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
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Quản lý bình luận",
          },
        ]}
      />
      <h3 className="text-center text-[1.9rem] font-medium mb-5">
        Quản lý bình luận
      </h3>

      <Table
        columns={columns}
        dataSource={listCommentId}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        className="tablePrimary"
      />
    </div>
  );
}

export default TableCommentId;
function dayjs() {
  throw new Error("Function not implemented.");
}
