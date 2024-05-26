import { Button, Modal, Space, Upload } from 'antd';
import { useState } from 'react'


function ModalMoTa(props:any) {
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
      <div onClick={showModal} className='cursor-pointer'>
        Xem Thêm
      </div>
 
    </Space>
    <Modal
      open={open}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={(_, { OkBtn, CancelBtn }) => (
        <>
          
          <CancelBtn />
          <OkBtn />
        </>
      )}
    >

     Mô tả : {props.data.moTa}
    </Modal>
  </>
  )
}

export default ModalMoTa
