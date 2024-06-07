import {
  ContextStore,
  ContextType,
  FilterParams,
  handleNumFilter,
} from "@/pages/home/context/filter-rooms.context";
import { Button, Modal } from "antd";
import React, { useContext } from "react";
import { PriceRange } from "./price-range";
import { CountRoom } from "./count-room";
import { Necessities } from "./necessities";
import "./index.css";
import { getRooms } from "@/services/room";
import { removeLocalStorage, saveLocalStorage } from "@/utils";
import { COUNT_FILTER, ROOM_FILTER } from "@/constant";
type Props = {};

export default function FilterPopup({}: Props) {
  const [
    { openModal, clear, count,rangePrice,chooseRooms,chooseNecessities,rangeDefault},
    { setOpenModal, setClear},
  ] = useContext<ContextType>(ContextStore);
  const modalTitle = (
    <div>
      <div className="mb-3 text-center font-semibold">Bộ lọc</div>
      <hr className="border-t-1 border-gray-200" />
    </div>
  );

  return (
    <Modal
      open={openModal}
      onCancel={() => {
        setOpenModal(false);
      }}
      title={modalTitle}
      footer={
        <div className="border-t border-gray-200">
          <hr className="my-2 w-full" />
          <div className="mt-5 flex justify-between">
            <button
              className="rounded-xl border-none px-3 py-1 text-[16px] font-semibold hover:bg-gray-100"
              onClick={() => {
                setClear(!clear);
                removeLocalStorage(ROOM_FILTER)
                removeLocalStorage(COUNT_FILTER)
              }}
            >
              Xoá tất cả
            </button>
            <button
              className="rounded-xl bg-[#222222] px-8 py-4 text-[16px] text-white hover:bg-[#000000]"
              onClick={() => {
                const data:FilterParams = {
                  rangePrice,
                  chooseNecessities,
                  chooseRooms
                }
                const count:number = handleNumFilter(data,rangeDefault)
                saveLocalStorage(ROOM_FILTER,data)
                saveLocalStorage(COUNT_FILTER,count)
                setOpenModal(false)
              }}
              disabled={count ? false : true}
            >
              {count
                ? `Hiển thị ${count} địa điểm`
                : "Không có kết quả tìm kiếm phù hợp"}
            </button>
          </div>
        </div>
      }
    >
      <div className="filter-popup h-[60vh] w-full overflow-y-auto overflow-x-hidden px-2">
        <PriceRange />
        <div className="mt-8">
          <CountRoom />
        </div>
        <div className="mt-8">
          <Necessities />
        </div>
      </div>
    </Modal>
  );
}
