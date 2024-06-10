import { closeModal } from "@/redux/admin/user-management/user-management.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRef } from "react";
import { AddAdmin } from "../add-admin";
import { UpdateUser } from "../update-user/update-user";

export const useFormModal = () => {
  const { modal, modalTitle, okText, btnColor } = useAppSelector(
    (state) => state.userManagementReducer,
  );
  const addUserRef = useRef<HTMLButtonElement>(null);
  const updateUserRef = useRef<HTMLButtonElement>(null);
  // const
  const dispatch = useAppDispatch();

  const handleOk = () => {
    switch (okText) {
      case "Thêm":
        addUserRef.current && addUserRef.current.click();
        break;
      case "Lưu":
        updateUserRef.current && updateUserRef.current.click();
        break;
      default:
        return;
    }
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const renderForm = () => {
    switch (okText) {
      case "Thêm":
        return <AddAdmin ref={addUserRef} />;
      case "Lưu":
        return <UpdateUser ref={updateUserRef} />;
      default:
        return "";
    }
  };

  return [
    { modal, modalTitle, btnColor, okText },
    { handleOk, handleCancel, renderForm },
  ];
};
