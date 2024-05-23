import React, { useState } from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal } from "@/redux/admin/user-management/user-management.slice";
type Props = {
  // show: any,
};

export  function FormModal({}: Props) {
  const modal = useAppSelector(state => state.userManagementReducer.modal)
  const dispatch = useAppDispatch()

  const handleOk = () => {
    dispatch(closeModal())
  };

  const handleCancel = () => {
    dispatch(closeModal())
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
