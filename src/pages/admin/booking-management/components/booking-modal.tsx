import {
  changeModalState,
  resetModalDetail,
} from "@/redux/admin/booking-management/booking.management.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { allFieldsNotEmpty, truncateText } from "@/utils";
import { Modal, Spin, Tooltip } from "antd";
import React, { Suspense, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
type Props = {};

export function BookingModal({}: Props) {
  const { modal, detail, status }: any = useAppSelector(
    (state) => state.BookingManagementReducer,
  );
  const dispatch = useAppDispatch();
  if (status === "loading")
    return (
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 50,
              display: "block",
              position: "absolute",
              top: "30%",
              left: "50%",
              zIndex: 99,
            }}
            spin
          />
        }
      />
    );
  return (
    <Modal
      title={<h2 className="text-[20px]">Thông tin chi tiết</h2>}
      open={modal}
      onCancel={() => {
        dispatch(changeModalState(false));
        dispatch(resetModalDetail());
      }}
      footer={null}
      cancelText="Huỷ"
    >
      {detail ? (
        <div className="flex flex-col">
          <div
            className="h-[180px] w-[100%] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${detail?.hinhAnh})`,
            }}
          ></div>
          <div className="ml-9 mt-7 space-y-5 text-left">
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">Tên phòng:</h3>
              <Tooltip title={detail?.tenPhong}>
                <p className="w-[70%]">
                  {detail.tenPhong && truncateText(detail.tenPhong, 40)}
                </p>
              </Tooltip>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">Vị trí:</h3>
              <p className="w-[70%]">{detail?.tenViTri}</p>
            </div>

            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">
                Tên người thuê:
              </h3>
              <p className="w-[70%]">{detail?.name}</p>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">Email:</h3>
              <p className="w-[70%]">{detail?.email}</p>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">
                Số điện thoại:
              </h3>
              <p className="w-[70%]">{detail?.phone}</p>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">
                Số lượng khách:
              </h3>
              <p className="w-[70%]">{detail?.soLuongKhach}</p>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">Ngày đi:</h3>
              <p className="w-[70%]">{detail?.ngayDi}</p>
            </div>
            <div className="flex gap-3">
              <h3 className="w-[30%] text-[15px] font-semibold">Ngày đến:</h3>
              <p className="w-[70%]">{detail?.ngayDen}</p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Mã phòng hoặc mã người dùng không hợp lệ</h2>
      )}
    </Modal>
  );
}
