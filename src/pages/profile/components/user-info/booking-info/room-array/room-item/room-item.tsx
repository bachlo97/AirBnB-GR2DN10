import React from 'react'
import { FaRegHeart } from "react-icons/fa";
type Props = {}

export  function RoomItem({}: Props) {
  return (
    <div>
    <div className="flex gap-7">
      <img
        className="h-[180px] w-[35%] rounded-xl object-cover"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-1155375567549354059/original/ae13ed1e-c9b2-4489-9822-bc5ea63eeb6c.jpeg?im_w=1200"
        alt=""
      />
      <div className="w-[65%]">
        <div className='flex justify-between'>
        <h4 className="text-gray-500 tracking-normal">Toàn bộ căn hộ dịch vụ tại Bình Thanh</h4>
        <FaRegHeart className="mr-[70px] text-[25px] cursor-pointer" />
        </div>
        <h3 className="text-[20px] tracking-wider">Romanic APT for Long-term Living@BEST L...</h3>
        <hr className="w-[30%] my-3" />
        <p className='text-gray-500 mt-2 tracking-wider'>2 khách - Phòng studio - 1 giường - 1 phòng tắm</p>
        <p className='text-gray-500 mt-2 tracking-wider'>Wifi - Bếp - Điều hoà nhiệt độ - Máy giặt</p>
        <p className='text-[18px] text-right mr-[70px]'>
          <span className="font-bold inline-block mr-1">$385</span>
          / tháng
        </p>
      </div>
    </div>
    <hr className="mt-8" />
  </div>

  )
}