import { Modal } from "antd";

import { useFormModal } from "./hook/form-modal.hook";
type Props = {};

export function FormModal({}: Props) {
  const [
    { modal, modalTitle, btnColor, okText },
    { handleOk, handleCancel, renderForm },
  ]: any = useFormModal();

  return (
    <>
      <Modal
        title={<h2 className="text-[20px]">{modalTitle}</h2>}
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText="Huỷ"
        okButtonProps={{ style: { backgroundColor: btnColor ? btnColor : "" } }}
      >
        {renderForm()}
      </Modal>
    </>
  );
}
