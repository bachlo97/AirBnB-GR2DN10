import React, { useRef, useState } from "react";
import {Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeModal } from "@/redux/admin/user-management/user-management.slice";
import { AddAdmin } from "./add-admin";
import { UpdateUser } from "./update-user/update-user";
type Props = {};

export function FormModal({}: Props) {
  const { modal, modalTitle, okText,btnColor } = useAppSelector(
    (state) => state.userManagementReducer,
  );
  const addUserRef = useRef<HTMLButtonElement>(null)
  const updateUserRef = useRef<HTMLButtonElement>(null)
  // const 
  const dispatch = useAppDispatch();

  const handleOk = () => {
    switch(okText){
      case 'Thêm':
        addUserRef.current && addUserRef.current.click()
        break;
      case 'Lưu':
        updateUserRef.current && updateUserRef.current.click()
        alert(123)
        break;
      default :
       return 
    } 
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const renderForm = () => {
    switch(okText){
      case 'Thêm':
        return <AddAdmin ref={addUserRef}/>
      case 'Lưu':
        return <UpdateUser/>
      default :
       return ''
    }
  }
  return (
    <>
      <Modal
        title={<h2 className="text-[20px]">{modalTitle}</h2>}
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText="Huỷ"
        okButtonProps={{ style: { backgroundColor: btnColor ? btnColor : '' } }} 
      >
        {renderForm()}
      </Modal>
    </>
  );
}
