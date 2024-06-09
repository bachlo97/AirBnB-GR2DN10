import {
  addForm,
  getUser,
  getUsersThunk,
  openModal,
  searchUsersThunk,
} from "@/redux/admin/user-management/user-management.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { TableColumnsType, TableProps } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Table, Input, Button, Popconfirm, Tag, Tooltip, Breadcrumb } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import { TiDelete } from "react-icons/ti";
import { printSuccessDialog, truncateText } from "@/utils";
import { FormModal } from "./components/modal/";
import { deleteUser, getProfile } from "@/services/user";
import { use } from "i18next";
type Props = {};

interface DataType {
  key: React.Key;
  id: number;
  stt: number;
  name: string;
  email: string;
  birthday: string;
  gender: string;
  role: string;
}

export default function UserManagement({}: Props) {
  const { Search } = Input;
  const userRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const { userList } = useAppSelector((state) => state.userManagementReducer);
  console.log({ userList });
  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  const columns: TableColumnsType<DataType> = [
    {
      title: "STT",
      dataIndex: "stt",
      sorter: (a, b) => a.stt - b.stt,
      // sortDirections: ["descend", "ascend"],
    },

    {
      title: "Name",
      dataIndex: "name",
      // sorter: (a, b) => a.name.length - b.name.length,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, { email }) => <>{truncateText(email, 23)}</>,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
      render: (_, { gender }) => (
        <div className="text-[20px] font-bold">
          {gender === "male" ? (
            <IoIosMale className="text-blue-500" />
          ) : (
            <IoFemaleOutline className="text-pink-500" />
          )}
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => a.role.length - b.role.length,
      render: (_, { role }) => (
        <Tag color={role.length > 4 ? "purple" : "cyan"}>
          {role.toUpperCase()}
        </Tag>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, user) => {
        return (
          <div className="flex gap-4">
            <div
              className="cursor-pointer self-center text-blue-500"
              onClick={async () => {
                try {
                  dispatch(openModal());
                  dispatch(
                    addForm({
                      modalTitle: "Chỉnh sửa người dùng",
                      okText: "Lưu",
                      btnColor: "#ffc107",
                    }),
                  );
                  const userAPI = await getProfile(user.id);
                  const payload = userAPI.data.content;
                  dispatch(getUser(payload));
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              <Tooltip title="Edit">
                <VscEdit />
              </Tooltip>
            </div>

            <Popconfirm
              title="Bạn có muốn xóa "
              onConfirm={async () => {
                await deleteUser(user.id);
                dispatch(getUsersThunk());
                printSuccessDialog("Xoá người dùng thành công");
              }}
              cancelText="Huỷ"
              okText="Chắn chắn"
            >
              <span
                className={" mr-3 cursor-pointer text-[20px] text-red-500"}
                onClick={async () => {}}
              >
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

  const data = userList.map((item: DataType, index) => ({
    ...item,
    stt: index + 1,
    gender: item.gender ? "male" : "female",
    role: item.role,
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
            title: "Quản lý thông tin người dùng",
          },
        ]}
      />
      <h3 className="mb-5 text-4xl font-bold text-center">Quản lý người dùng</h3>
      <Button
        className="mb-4"
        onClick={() => {
          dispatch(openModal());
          dispatch(
            addForm({
              modalTitle: "Thêm quản trị viên",
              okText: "Thêm",
            }),
          );
        }}
      >
        Thêm quản trị viên
      </Button>
      <FormModal />
      <Search
        className="mb-4"
        placeholder="input search name"
        allowClear
        enterButton={<IoSearchOutline />}
        size="large"
        onChange={async (e) => {
          if (userRef.current) {
            clearTimeout(userRef.current);
          }
          userRef.current = setTimeout(async () => {
            if (e.target.value) {
              dispatch(searchUsersThunk(e.target.value));
            } else {
              dispatch(getUsersThunk());
            }
          }, 500);
        }}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
