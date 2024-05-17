import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
type Props = {};

export function RoomItem({}: Props) {
  const [heart, setHeart] = useState(false);
  return (
    <div>
      <div className="flex gap-7">
        <img
          className="h-[180px] w-[35%] rounded-xl object-cover"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1155375567549354059/original/ae13ed1e-c9b2-4489-9822-bc5ea63eeb6c.jpeg?im_w=1200"
          alt=""
        />
        <div className="w-[65%]">
          <div className="flex justify-between">
            <h4 className="tracking-normal text-gray-500">
              Toàn bộ căn hộ dịch vụ tại Bình Thanh
            </h4>
            <FaRegHeart
              className={`${heart ? "text-pink-500" : ""} mr-[70px] cursor-pointer text-[25px]`}
              onClick={() => setHeart(!heart)}
            />
          </div>
          <h3 className="text-[20px] tracking-wider">
            Romanic APT for Long-term Living@BEST L...
          </h3>
          <hr className="my-3 w-[30%]" />
          <p className="mt-2 tracking-wider text-gray-500">
            2 khách - Phòng studio - 1 giường - 1 phòng tắm
          </p>
          <p className="mt-2 tracking-wider text-gray-500">
            Wifi - Bếp - Điều hoà nhiệt độ - Máy giặt
          </p>
          <p className="mr-[70px] text-right text-[18px]">
            <span className="mr-1 inline-block font-bold">$385</span>/ tháng
          </p>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
}
