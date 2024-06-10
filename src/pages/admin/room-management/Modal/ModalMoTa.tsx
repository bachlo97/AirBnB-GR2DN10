import { Modal, Space, Tooltip} from 'antd';
import { useState } from 'react'
import { GrView } from 'react-icons/gr';


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
     
      <Tooltip title="Xem chi tiet">
      <GrView />
  </Tooltip>
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
