import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import _ from 'lodash'
type Props = {
  data: TBookingHistory;
  heartIndex: number
  toggleHeart: (id:number) => void
  hearts: boolean[]
};

export function RoomItem({ data,heartIndex ,toggleHeart,hearts}: Props) {
  const convertEquiment:any = {
    mayGiat: 'Máy giặt',
    banLa: 'Bàn là',
    tivi: 'Ti vi',
    dieuHoa: 'Điều hoà',
    wifi: 'wifi',
    bep: 'Bếp',
    doXe: 'Đỗ xe',
    hoBoi: 'Hồ bơi',
    banUi: 'Bàn ủi',
  }
  const convertRoomParts:any = {
    phongNgu: 'Phòng ngủ',
    giuong: 'Giường',
    phongTam: 'Phòng tắm'
  }
  const renderEquiment = () =>{
      const equipment = _.pick(data,['mayGiat','banLa','tivi','dieuHoa','wifi','bep','doXe','hoBoi','banUi'])
      const filteredEqm = Object.entries(equipment)
      .filter(([key, value]) => value)
      .map(([key]) => convertEquiment[key]);

      return filteredEqm.join(' - ')
  }
  const renderRoomParts = () =>{
    const parts = _.pick(data,['phongNgu','giuong','phongTam'])
    const filteredParts = Object.entries(parts)
    .filter(([key, value]) => value >= 1)
    .map(([key, value]) => `${value} ${convertRoomParts[key]}`);
    
    return filteredParts.join(' - ')
  }
  return (
    <div className="mt-8">
      <div className="flex gap-7">
        <img
          className="h-[180px] w-[35%] rounded-xl object-cover"
          src={data.hinhAnh}
          alt=""
        />
        <div className="w-[65%]">
          <div className="flex justify-between">
            <h4 className="tracking-normal text-gray-500">
              {`Toàn bộ căn hộ dịch vụ tại ${data.tenViTri}, ${data.tinhThanh}`}
            </h4>
            <FaRegHeart
              className={`${hearts[heartIndex] ? "text-pink-500" : ""} mr-[70px] cursor-pointer text-[25px]`}
              onClick={() => {
                toggleHeart(heartIndex)
              }}
            />
          </div>
          <h3 className="text-[20px] tracking-wider">
            {data.tenPhong}
          </h3>
          <hr className="my-3 w-[30%]" />
          <p className="mt-2 tracking-wider text-gray-500">
            {`${data.soLuongKhach} khách - `}
            {renderRoomParts()}
          </p>
          <p className="mt-2 tracking-wider text-gray-500">
            {renderEquiment()}
          </p>
          <p className="mr-[70px] text-right text-[18px]">
            <span className="mr-1 inline-block font-bold">{`$${data.giaTien}`}</span>
            / tháng
          </p>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
}

const eqm = {
  phongNgu : 1,
  phongTam: 0,
  giuong: 2,
}
