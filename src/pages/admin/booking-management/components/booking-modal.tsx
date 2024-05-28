import { changeModalState } from "@/redux/admin/booking-management/booking.management.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Modal, Tooltip } from "antd";
import React from "react";

type Props = {};

export function BookingModal({}: Props) {
  const {modal} = useAppSelector(state => state.BookingManagementReducer)
  const dispatch = useAppDispatch()
  return (
    <Modal
      title={<h2 className="text-[20px]">Thông tin chi tiết</h2>}
      open={modal}
      onCancel={() => {
        dispatch(changeModalState(false))
      }}
      footer={null}
      cancelText="Huỷ"
    >
      <div className="flex flex-col">
        <div
          className="h-[180px] w-[100%] rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg)`,
          }}
        ></div>
        <div className="text-left mt-7 ml-9 space-y-5">
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Tên Phòng:</h3>
                <Tooltip title={'Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetu'}>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu...</p>
                </Tooltip>

            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Vị trí:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Tên người thuê:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Email:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Số điện thoại:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Số lượng khách:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Ngày đi:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
            <div className="flex gap-3">
                <h3 className="w-[30%] font-semibold text-[15px]">Ngày đến:</h3>
                <p className="w-[70%]"> Lorem ipsum dolor sit amet consectetu</p>
            </div>
        </div>
      </div>
    </Modal>
  );
}
