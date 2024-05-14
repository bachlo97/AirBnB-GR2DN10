import { useAppSelector } from "@/redux/hooks";
import { Input } from "antd";
import React, { useState } from "react";

type Props = {};

export default function AccountInfo({}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  return (
    <div
      className={`${open ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0  after:bg-[#ffffffd9] after:content-[""]' : ""} relative`}
    >
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Email</h4>
        </div>
        <p className="text-[15px] text-gray-500">{user?.email}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Password</h4>
          <span className="cursor-pointer text-[15px] font-semibold underline">
            Chỉnh sửa
          </span>
        </div>
        <p className="text-[15px] text-gray-500">********</p>
        <hr className="mt-6" />
      </div>
      <div className={`${open ? "relative z-30" : null} mt-5 w-[55%]`}>
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Tên người dùng</h4>
          <span
            className="cursor-pointer text-[15px] font-semibold underline"
            onClick={() => setOpen(!open)}
          >
            {open ? "Huỷ" : "Chỉnh sửa"}
          </span>
        </div>
        {open ? (
          <>
            <Input className="mt-3 py-4" defaultValue={user?.name} allowClear />
            <button className='px-8 py-4   mt-4 bg-[#222222] hover:bg-[#000000] text-white rounded-xl'>Lưu</button>
          </>
        ) : (
          <p className="text-[15px] text-gray-500">{user?.name}</p>
        )}

        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Số điện thoại</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">{user?.phone}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Ngày sinh </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">{user?.birthday}</p>
        <hr className="mt-6" />
      </div>
      <div className="mt-5 w-[55%]">
        <div className="flex items-center justify-between">
          <h4 className="text-[18px] text-gray-700">Giới tính </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">
          {user?.gender ? "Nam" : "Nữ"}
        </p>
        <hr className="mt-6" />
      </div>
    </div>
  );
}
