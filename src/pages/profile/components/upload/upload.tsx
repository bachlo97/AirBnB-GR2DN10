import { CheckIcon, VIcon } from "@/assets/icons";
import React from "react";

type Props = {};

export function Upload({}: Props) {
  return (
    <>
      <div className="h-40 w-40 rounded-full bg-pink-500 flex items-center justify-center mt-10">
        <h1 className="text-[35px] text-white">C</h1>
      </div>
      <span className="underline text-[14px] mt-2">Cập nhật ảnh</span>
      <div className="text-left w-[85%] mt-10">
        <CheckIcon/>
      </div>
      <div className="text-left w-[85%] mt-5 font-semibold">
        <p className="">Xác minh danh tính</p>
      </div>
      <div className="text-left w-[85%] mt-2 text-[13px] text-gray-600">
        <p className="">Xác thực danh tính của bạn với huy hiệu xác minh danh tính.</p>
      </div>
      <div className="text-left w-[85%] mt-4 text-[13px] font-semibold text-gray-600">
        <button className='rounded-xl px-5 py-3 border-[1px] border-solid border-gray-600'>Nhận huy hiệu</button>
      </div>
      <div className="text-left w-[85%] mt-10">
        <hr />
      </div>
      <div className="text-left w-[85%] mt-10 font-semibold text-[19px]">
        <h3 className="">Cường đã xác nhận</h3>
      </div>
      <div className="text-left w-[85%] mt-4 mb-16 text-[13px] flex space-x-2">
        <VIcon/>
        <span className="text-gray-600 ">Địa chỉ email</span>
      </div>
    </>
  );
}
