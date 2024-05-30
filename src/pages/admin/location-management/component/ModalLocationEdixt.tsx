import { Button, Modal, Space, Upload } from 'antd';
import { useState } from 'react'

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAdminLocationThunk, putAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';
import { putLocaltion } from '@/services/localtion/Localtion.service';

function ModalLocationEdit(props:any) {

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
    const listLocation:any = useAppSelector((state) => state.locationSlice.listLocation);
    const dispatch = useAppDispatch();

    const SignupSchema = Yup.object().shape({
        
      tenViTri: Yup.string().min(2).max(50).required('Tên là bắt buộc'),
  
  
      tinhThanh: Yup.string().required('Email là bắt buộc'),
      quocGia:Yup.string().required('Không được bỏ trống'),
      hinhAnh:Yup.string().required('Không được bỏ trống'),
  
    });

  return (
    <>
    <Space>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
 
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

<Formik
      initialValues={{
        id:props.data.id,
        tenViTri:props.data.tenViTri, tinhThanh: props.data.tinhThanh ,quocGia:props.data.quocGia,hinhAnh:props.data.hinhAnh}}
      onSubmit={(values:object) => {
    
      console.log(values);
      
     setOpen(false)
      dispatch(putAdminLocationThunk(values))
       dispatch(getAdminLocationThunk())
       
      }}
      validationSchema={SignupSchema}
    >
      {({ handleSubmit,handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Vị Trí:</label>
            <Field type="text"
        
          onChange={handleChange}

            id="tenViTri" name="tenViTri" className="outline-none border block w-[100%] h-[30px] px-3 mb-3"/>
            <ErrorMessage name="tenViTri" component="div" className="text-red-500" />
          </div>
       
          <div className='mt-1'>
            <label htmlFor="tinhThanh">Tỉnh Thành:</label>
            
            <Field type="text" id="tinhThanh"
            
            name="tinhThanh" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="tinhThanh" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="quocGia">Quốc Gia:</label>
            <Field as="select" id="quocGia" name="quocGia" 
     
            className="outline-none border block w-[100%] h-[30px] px-3 mb-3">
              <option value="">Chọn quốc gia</option>
              <option value="vietNam">Việt Nam</option>
              <option value="amerian">Mỹ</option>
    
            </Field>
            <ErrorMessage name="quocGia" component="div" className="text-red-500" />
          </div>
          <div className='mt-1'>
            <label htmlFor="hinhAnh">Tỉnh Thành:</label>
            
            <Field
               
            type="text" id="hinhAnh" name="hinhAnh" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="hinhAnh" component="div" className="text-red-500" />
          </div>
          <button type="submit">Gửi</button>
        
        </Form>
      )}
    </Formik>
    </Modal>
  </>
  )
}

export default ModalLocationEdit
