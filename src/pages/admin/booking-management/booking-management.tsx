import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { TableColumnsType, TableProps } from "antd";
import React, { useEffect, useRef } from "react";
import { Table, Input, Popconfirm, Breadcrumb, Tooltip } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";

import { TiDelete } from "react-icons/ti";

import {
  changeModalState,
  getBookingListThunk,
  handleModalDetailThunk,
  setLoading,
  setSucess,
} from "@/redux/admin/booking-management/booking.management.slice";
import { BookingModal } from "./components";
import { deleteBooking } from "@/services/booking";
import { printSuccessDialog } from "@/utils";
type Props = {};

interface DataType {
  key: React.Key;
  id: number;
  stt: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}

export default function BookingManagement({}: Props) {
  const { Search } = Input;
  const userRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { bookingList } = useAppSelector(
    (state) => state.BookingManagementReducer,
  );
  console.log({ bookingList });
  useEffect(() => {
    dispatch(getBookingListThunk(""));
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "stt",
      sorter: (a, b) => a.stt - b.stt,
    },
    {
      title: "check in",
      dataIndex: "ngayDen",
    },
    {
      title: "check out",
      dataIndex: "ngayDi",
    },

    {
      title: "Guests",
      dataIndex: "soLuongKhach",
      sorter: (a, b) => a.soLuongKhach - b.soLuongKhach,
    },
    {
      title: "Room code",
      dataIndex: "maPhong",
      sorter: (a, b) => a.maPhong - b.maPhong,
    },
    {
      title: "User code",
      dataIndex: "maNguoiDung",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, booking) => {
        return (
          <div className="flex gap-4">
            <div
              className="cursor-pointer self-center text-blue-500"
              onClick={async () => {
                await dispatch(setLoading());
                await dispatch(changeModalState(true));
                await dispatch(
                  handleModalDetailThunk({
                    maPhong: booking.maPhong,
                    maNguoiDung: booking.maNguoiDung,
                    soLuongKhach: booking.soLuongKhach,
                    ngayDen: booking.ngayDen,
                    ngayDi: booking.ngayDi,
                  }),
                );
                dispatch(setSucess());
              }}
            >
              <Tooltip title="View detail">
                <GrOverview />
              </Tooltip>
            </div>

            <Popconfirm
              title="Bạn có muốn xóa "
              onConfirm={async () => {
                try {
                  await deleteBooking(booking.id);
                  await dispatch(getBookingListThunk(""));
                  printSuccessDialog("Xoá thành công");
                } catch (e) {
                  console.log(e);
                }
              }}
              cancelText="Huỷ"
              okText="Chắn chắn"
            >
              <span className={" mr-3 cursor-pointer text-[20px] text-red-500"}>
                <Tooltip title="Delete">
                  <TiDelete />
                </Tooltip>
              </span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const data = bookingList.map((item: DataType, index: number) => ({
    ...item,
    stt: index + 1,
  }));
  console.log({ data });

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Admin",
          },

          {
            title: "Quản lý thông tin đặt phòng",
          },
        ]}
      />
      <h3 className="mb-5 text-center text-4xl font-bold">Quản lý đặt phòng</h3>
      <BookingModal />
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
            dispatch(getBookingListThunk(e.target.value));
          }, 400);
        }}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
