import { Button, Modal, Space } from 'antd';
import React, { useState } from 'react'

function ModalChuaPhatTrien(props:any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
  
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      setOpen(false);
   
    
    };
    const handleCancel = () => {
      setOpen(false);
  
    };


  return (
    <>
  
  <Space>
      <button onClick={showModal} className='cursor-pointer mb-3'>
     {props.text}
      </button>
 
    </Space>
    <Modal
      open={open}
      title="Thêm vị trí"
      onOk={handleOk}
      onCancel={handleCancel}
      className="modalSetup"
 
    >
  
  </Modal>
  </>
  )
}

export default ModalChuaPhatTrien
