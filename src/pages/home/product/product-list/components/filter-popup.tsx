import { ContextStore } from "@/pages/home/context/filter-rooms.context";
import { Button, Modal } from "antd";
import React, { useContext } from "react";
import { PriceRange } from "./price-range";
import { CountRoom } from "./count-room";

type Props = {};

export default function FilterPopup({}: Props) {
  const [openModal, setOpenModal] = useContext(ContextStore);

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
          <div className="flex justify-between mt-5">
            <button className="rounded-xl border-none px-3 py-1 text-[16px] font-semibold hover:bg-gray-100">
              Xoá tất cả
            </button>
            <button
              className="rounded-xl bg-[#222222] px-8 py-4 text-[16px] text-white hover:bg-[#000000]"
              onClick={() => alert(123)}
            >
              Hiển thị 1000 địa điểm
            </button>
          </div>
        </div>
      }
    >
      <PriceRange />
      <div className="mt-8">
        <CountRoom />
      </div>
    </Modal>
  );
}
