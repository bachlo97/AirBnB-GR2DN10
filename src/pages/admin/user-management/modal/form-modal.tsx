import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal } from "@/redux/admin/user-management/user-management.slice";
type Props = {
  title: string,
  okText: string,
};

export function FormModal({title,}: Props) {
  const modal = useAppSelector((state) => state.userManagementReducer.modal);
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(closeModal());
    alert(123);
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Modal
        title={<h2 className='text-[20px]'>Thêm quản trị viên</h2>}
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Huỷ"
      >
        <div className="flex justify-center gap-8">
          <div className="w-[100%]">
            <label htmlFor="">Name</label>
            <Input />
          </div>
        </div>



        <div className="mt-5 flex gap-8">
          <div className="w-[50%]">
            <label className="text-left" htmlFor="">
              Phone number
            </label>
            <Input />
          </div>
          <div className="w-[50%]">
            <label className="text-left" htmlFor="">
              birthday
            </label>
            <Input />
          </div>
        </div>

        <div className="w-[100%]">
          <label htmlFor="">Email</label>
          <Input />
        </div>

        <div className="mt-5 flex gap-8">
          <div className="w-[50%]">
            <label className="text-left" htmlFor="">
              Gender
            </label>
            <Input />
          </div>
          <div className="w-[50%]">
            <label className="text-left" htmlFor="">
              Role
            </label>
            <Input />
          </div>
        </div>



      </Modal>
    </>
  );
}
