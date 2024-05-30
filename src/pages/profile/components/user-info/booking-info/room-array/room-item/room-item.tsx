import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { truncateText } from "@/utils";
type Props = {
  data: TBookingHistory;
  heartIndex: number;
  toggleHeart: (id: number) => void;
  hearts: boolean[];
};

export function RoomItem({ data, heartIndex, toggleHeart, hearts }: Props) {
  const navigate = useNavigate()

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
      <div className="flex ipad:flex-row mobile:flex-col ipad:items-start mobile:items-center gap-7">
        <div className="relative mobile:h-[150px] mobile:w-[80%] ipad:h-[180px] ipad:w-[35%] bg-slate-950 group overflow-hidden">
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

        <div className="ipad:w-[65%] mobile:w-[80%]">
          <div className="flex justify-between ipad:gap-0 mobile:gap-2 mobile:mb-3 ipad:mb-0">
            <h4 className="tracking-normal text-gray-500 desktop:text-[14px] ipad:text-[12px] mobile:text-[11.5px]">
              {`Toàn bộ căn hộ dịch vụ tại ${data.tenViTri}, ${data.tinhThanh}`}
            </h4>
            <FaRegHeart
              className={`${hearts[heartIndex] ? "text-pink-500" : ""} ipad:mr-[40px] cursor-pointer mobile:text-[20px] ipad:text-[25px]`}
              onClick={() => {
                toggleHeart(heartIndex);
              }}
            />
          </div>
          <h3 className="desktop:text-[20px] ipad:text-[15px] desktop:tracking-wider ipad:tracking-tight mobile:text-[12px] mobile:tracking-tighter">
            {truncateText(data.tenPhong, 50)}
          </h3>
          <hr className="my-3 w-[30%]" />
          <p className="mt-2 desktop:tracking-wider text-gray-500 ipad:text-[14px] ipad:tracking-tight mobile:text-[11px]">
            {`${data.soLuongKhach} khách - `}
            {truncateText(renderRoomParts(), 53)}
          </p>
          <p className="mt-2 desktop:tracking-wider text-gray-500 ipad:text-[14px] ipad:tracking-tight text-[11px]">
            {truncateText(renderEquiment(), 60)}
          </p>
          <p className="desktop:mr-[70px] ipad:mr-[30px] ipad:mt-[30px] text-right text-[18px] mobile:mt-4">
            <span className="mr-1 inline-block font-bold">{`$${data.giaTien}`}</span>
            / tháng
          </p>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
}
