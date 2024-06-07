import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { formatDate, truncateText } from "@/utils";
type Props = {
  data: TBookingHistory;
  heartIndex: number;
  toggleHeart: (id: number) => void;
  hearts: boolean[];
};

export function RoomItem({ data, heartIndex, toggleHeart, hearts }: Props) {
  const navigate = useNavigate();

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
      <div className="flex gap-7 mobile:flex-col mobile:items-center ipad:flex-row ipad:items-start">
        <div className="group relative overflow-hidden bg-slate-950 mobile:h-[150px] mobile:w-[80%] ipad:h-[180px] ipad:w-[35%]">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={data.hinhAnh}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 translate-x-[-100%] bg-[#00000099] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 "></div>
          <button
            className="absolute left-[50%] top-[50%] flex translate-x-[-100%] translate-y-[-50%] items-center justify-center gap-1 border-[1.5px] border-solid border-white px-5 py-2 font-semibold text-white opacity-0 transition-all duration-500 hover:border-pink-500 hover:text-pink-500 group-hover:translate-x-[-50%] group-hover:opacity-100"
            onClick={() => navigate(`/roomdetail/${data.id}`)}
          >
            Chi tiết <LuSend className="inline" />
          </button>
        </div>

        <div className="mobile:w-[80%] ipad:w-[65%]">
          <div className="flex justify-between mobile:mb-3 mobile:gap-2 ipad:mb-0 ipad:gap-0">
            <h4 className="tracking-normal text-gray-500 mobile:text-[11.5px] ipad:text-[12px] desktop:text-[14px]">
              {`Toàn bộ căn hộ dịch vụ tại ${data.tenViTri}, ${data.tinhThanh}`}
            </h4>
            <FaRegHeart
              className={`${hearts[heartIndex] ? "text-pink-500" : ""} cursor-pointer mobile:text-[20px] ipad:mr-[40px] ipad:text-[25px]`}
              onClick={() => {
                toggleHeart(heartIndex);
              }}
            />
          </div>
          <h3 className="mobile:text-[12px] mobile:tracking-tighter ipad:text-[15px] ipad:tracking-tight desktop:text-[20px] desktop:tracking-wider">
            {truncateText(data.tenPhong, 50)}
          </h3>
          <hr className="my-3 w-[30%]" />
          <p className="mt-2 text-gray-500 mobile:text-[11px] ipad:text-[14px] ipad:tracking-tight desktop:tracking-wider">
            {`${data.soLuongKhach} khách - `}
            {truncateText(renderRoomParts(), 53)}
          </p>
          <p className="mt-2 text-[11px] text-gray-500 ipad:text-[14px] ipad:tracking-tight desktop:tracking-wider">
            {truncateText(renderEquiment(), 60)}
          </p>
          <p className="mt-2 text-[11px] text-gray-500 ipad:text-[14px] ipad:tracking-tight desktop:tracking-wider">
            {`Lịch trình: ${formatDate(data.ngayDen.split("T")[0])} ~ ${formatDate(data.ngayDi.split("T")[0])}`}
          </p>
          <p className="text-right text-[18px] mobile:mt-4 ipad:mr-[30px] ipad:mt-[30px] desktop:mr-[70px]">
            <span className="mr-1 inline-block font-bold">{`$${data.giaTien}`}</span>
            / tháng
          </p>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
}
