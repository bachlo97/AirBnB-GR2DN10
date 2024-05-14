import { useAppSelector } from "@/redux/hooks";
import React from "react";

type Props = {};

export default function AccountInfo({}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  console.log(typeof user.birthday);
  return (
    <div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Email</h4>
        </div>
        <p className="text-[15px] text-gray-500">{user.email}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Password</h4>
          {/* <span className="text-[15px] font-semibold underline">Chỉnh sửa</span> */}
        </div>
        <p className="text-[15px] text-gray-500">********</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Tên người dùng</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">{user.name}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Số điện thoại</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">{user.phone}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Ngày sinh </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">{user.birthday}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Giới tính </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">
          {user.gender ? "Nam" : "Nữ"}
        </p>
        <hr className="mt-6" />
      </div>
    </div>
  );
}
