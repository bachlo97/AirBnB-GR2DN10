import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { TableColumnsType, TableProps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Popconfirm, Tag } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import { TiDelete } from "react-icons/ti";
import { printSuccessDialog, truncateText } from "@/utils";
import { FormModal } from "./components/modal/";
import { deleteUser, getProfile } from "@/services/user";
import { use } from "i18next";
import {
  changeModalState,
  getBookingListThunk,
  handleModalDetailThunk,
} from "@/redux/admin/booking-management/booking.management.slice";
import { BookingModal } from "./components";
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
      title: "departure date",
      dataIndex: "ngayDen",
    },
    {
      title: "arrival date",
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
      render: (_,booking) => {
        return (
          <div className="flex gap-4">
            <div
              className="cursor-pointer self-center text-blue-500"
              onClick={async () => {
                await dispatch(changeModalState(true));
                dispatch(handleModalDetailThunk({
                  maPhong : booking.maPhong,
                  maNguoiDung: booking.maNguoiDung
                }))
              }}
            >
              <GrOverview />
            </div>

            <Popconfirm
              title="Bạn có muốn xóa "
              onConfirm={async () => {}}
              cancelText="Huỷ"
              okText="Chắn chắn"
            >
              <span
                className={" mr-3 cursor-pointer text-[20px] text-red-500"}
                onClick={async () => {}}
              >
                <TiDelete />
              </span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const data = bookingList.map((item: DataType, index) => ({
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
      <h3 className="mb-5 text-4xl font-bold">Quản lý đặt phòng</h3>
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
