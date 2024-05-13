import React from "react";

type Props = {};

export default function AccountInfo({}: Props) {
  return (
    <div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Email</h4>
        </div>
        <p className="text-[15px] text-gray-500">cuongpt@yvl.com.vn</p>
        <hr className="mt-6" />
      </div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Password</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">********</p>
        <hr className="mt-6" />
      </div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Tên người dùng</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">Cường Phạm</p>
        <hr className="mt-6" />
      </div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Số điện thoại</h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">0902195782</p>
        <hr className="mt-6" />
      </div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Ngày sinh </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">08/09/1997</p>
        <hr className="mt-6" />
      </div>
      <div className="w-[55%] mt-5">
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] text-gray-700">Giới tính </h4>
          <span className="text-[15px] font-semibold underline">Chỉnh sửa</span>
        </div>
        <p className="text-[15px] text-gray-500">Nam</p>
        <hr className="mt-6" />
      </div>
      
    </div>
  );
}
