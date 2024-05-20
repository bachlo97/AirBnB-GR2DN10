import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
type Props = {
  data: TBookingHistory;
  heartIndex: number;
  toggleHeart: (id: number) => void;
  hearts: boolean[];
};

export function RoomItem({ data, heartIndex, toggleHeart, hearts }: Props) {
  const navigate = useNavigate()
  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.substring(0, limit) + "...";
    }
  };
  const convertEquiment: any = {
    mayGiat: "Máy giặt",
    banLa: "Bàn là",
    tivi: "Ti vi",
    dieuHoa: "Điều hoà",
    wifi: "wifi",
    bep: "Bếp",
    doXe: "Đỗ xe",
    hoBoi: "Hồ bơi",
    banUi: "Bàn ủi",
  };
  const convertRoomParts: any = {
    phongNgu: "Phòng ngủ",
    giuong: "Giường",
    phongTam: "Phòng tắm",
  };
  const renderEquiment = () => {
    const equipment = _.pick(data, [
      "mayGiat",
      "banLa",
      "tivi",
      "dieuHoa",
      "wifi",
      "bep",
      "doXe",
      "hoBoi",
      "banUi",
    ]);
    const filteredEqm = Object.entries(equipment)
      .filter(([key, value]) => value)
      .map(([key]) => convertEquiment[key]);

    return filteredEqm.join(" - ");
  };
  const renderRoomParts = () => {
    const parts = _.pick(data, ["phongNgu", "giuong", "phongTam"]);
    const filteredParts = Object.entries(parts)
      .filter(([key, value]) => value >= 1)
      .map(([key, value]) => `${value} ${convertRoomParts[key]}`);

    return filteredParts.join(" - ");
  };
  return (
    <div className="mt-8">
      <div className="flex gap-7">
        <div className="relative h-[180px] w-[35%] bg-slate-950 group overflow-hidden">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={data.hinhAnh}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#00000099] opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 "></div>
          <button className="absolute left-[50%] top-[50%] flex translate-y-[-50%] items-center justify-center gap-1 border-[1.5px] border-solid border-white px-5 py-2 text-white hover:border-pink-500 hover:text-pink-500 font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-x-[-50%] transition-all duration-500 translate-x-[-100%]" onClick={() => navigate(`/roomdetail/${data.id}`)}>
            Chi tiết <LuSend className="inline" />
          </button>
        </div>

        <div className="w-[65%]">
          <div className="flex justify-between">
            <h4 className="tracking-normal text-gray-500">
              {`Toàn bộ căn hộ dịch vụ tại ${data.tenViTri}, ${data.tinhThanh}`}
            </h4>
            <FaRegHeart
              className={`${hearts[heartIndex] ? "text-pink-500" : ""} mr-[70px] cursor-pointer text-[25px]`}
              onClick={() => {
                toggleHeart(heartIndex);
              }}
            />
          </div>
          <h3 className="text-[20px] tracking-wider">
            {truncateText(data.tenPhong, 50)}
          </h3>
          <hr className="my-3 w-[30%]" />
          <p className="mt-2 tracking-wider text-gray-500">
            {`${data.soLuongKhach} khách - `}
            {truncateText(renderRoomParts(), 53)}
          </p>
          <p className="mt-2 tracking-wider text-gray-500">
            {truncateText(renderEquiment(), 60)}
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
