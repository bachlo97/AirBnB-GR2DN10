import { Button, Modal, Space, Upload } from 'antd';
import { useState } from 'react'

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addLocation } from '@/services/localtion/Localtion.service';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addAdminLocationThunk, getAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';
import { ButtonPrimary } from '@/components/Button/Button';
import { ButtonPrimaryTwo } from '../../../../components/Button/Button';
import Swal from 'sweetalert2';
import useAlertHook from '@/hooks/notification/Alert';

function ModalLocation() {
    const [open, setOpen] = useState(false);
    const {alertSuccessCenter}=useAlertHook()
   
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      setOpen(false);
      dispatch(getAdminLocationThunk(''))
    
    };
    const handleCancel = () => {
      setOpen(false);
      dispatch(getAdminLocationThunk(
        ''
      ))
    };
    const dispatch = useAppDispatch();

    const SignupSchema = Yup.object().shape({
      tenViTri: Yup.string().min(2).max(50).required('Tên vị trí là bắt buộc'),
  
  
      tinhThanh: Yup.string().required('Tên tỉnh thành là bắt buộc'),
      quocGia:Yup.string().required('Tên quốc gia được bỏ trống'),
      hinhAnh:Yup.string().required('Hình ảnh được bỏ trống'),
  
    });

  return (
    <>
  
  <Space>
      <Button onClick={showModal} className='cursor-pointer mb-3'>
        Thêm mới
      </Button>
 
    </Space>
    <Modal
      open={open}
      title="Thêm vị trí"
      onOk={handleOk}
      onCancel={handleCancel}
      className="modalSetup"
 
    >

<Formik
      initialValues={{ tenViTri: '', tinhThanh: '' ,quocGia:'',hinhAnh:''}}
      onSubmit={(values,{resetForm}) => {
    
       dispatch(addAdminLocationThunk(values))  
        dispatch(getAdminLocationThunk(''))
       setOpen(false);
       resetForm();
       alertSuccessCenter('Thêm dữ liệu thành công')
     
      }}
      validationSchema={SignupSchema}
    >

      
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Vị Trí:</label>
            <Field type="text" id="tenViTri" name="tenViTri" className="outline-none border block w-[100%] h-[30px] px-3 mb-3"/>
            <ErrorMessage name="tenViTri" component="div" className="text-red-500" />
          </div>
          <div className='mt-1'>
            <label htmlFor="tinhThanh">Tỉnh Thành:</label>
            
            <Field type="text" id="tinhThanh" name="tinhThanh" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="tinhThanh" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="quocGia">Quốc Gia:</label>
            <Field as="select" id="quocGia" name="quocGia" className="outline-none border block w-[100%] h-[30px] px-3 mb-3">
              <option value="">Chọn quốc gia</option>
              <option value="vietNam">Việt Nam</option>
              <option value="amerian">Mỹ</option>
    
            </Field>
            <ErrorMessage name="quocGia" component="div" className="text-red-500" />
          </div>
          <div className='mt-1'>
            <label htmlFor="hinhAnh">Hình Ảnh:</label>
            
            <Field type="text" id="hinhAnh" name="hinhAnh" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="hinhAnh" component="div" className="text-red-500" />
          </div>
          <div className="flex gap-3 items-end justify-end">
          <div
          onClick={handleCancel}
          className='cursor-pointer border-solid border w-[50px] h-[3rem] text-center' style={{lineHeight:'2.5rem'}}
          >Huỷ</div>
          <ButtonPrimary width='50px' height={3} type="submit">Gửi</ButtonPrimary>
         
          </div>
        </Form>
      )}
    </Formik>
    </Modal>
  </>
  )
}

export default ModalLocation
