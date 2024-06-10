import { Button, Modal, Space, Switch } from 'antd';
import { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';
import { addRoomThunk } from '@/redux/room/Room.slice';
import * as Yup from 'yup';
import { ButtonPrimary } from '@/components/Button/Button';
import useAlertHook from '@/hooks/notification/Alert';
import '../css/style.css'

function ModalAddRoom() {
    const [open, setOpen] = useState(false);
    const listLocation:any = useAppSelector((state) => state.locationSlice.listLocation);
    const dispatch = useAppDispatch();
    const {alertSuccessCenter}=useAlertHook()

    useEffect(()=>{

        dispatch(getAdminLocationThunk(''))
      },[dispatch])

    
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      setOpen(false);
    
    
    };
    const handleCancel = () => {
      setOpen(false);
   
    };
      const SignupSchema = Yup.object().shape({
        tenPhong: Yup.string().min(2).max(50).required('Tên phòng là bắt buộc'),
        giaTien: Yup.number().required('Giá tiền là bắt buộc'),
        hinhAnh: Yup.string().required('Hình ảnh là bắt buộc'),
        khach: Yup.number().required('Số khách là bắt buộc'),
        phongNgu: Yup.number().min(2).max(50).required('Phòng ngủ là bắt buộc'),
        moTa: Yup.string().required('Mô tả là bắt buộc'),
        giuong: Yup.number().required('Số giường là bắt buộc'),
        phongTam: Yup.number().required('Số phòng tắm là bắt buộc'),
        quocGia: Yup.string().required('Tên vị trí là bắt buộc'),
    
    
       
    
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
      title="Thêm sản phẩm"
      onOk={handleOk}
      onCancel={handleCancel}
      className="modalSetup"

    >
<Formik
      initialValues={{ tenPhong: '', giaTien: '' ,hinhAnh:'',khach:'',phongNgu:'',giuong:'',phongTam:'',quocGia:'',moTa:'',mayGiat:false,banLa:false,tivi:false,dieuHoa:false,wifi:false,bep:false,doXe:false,banUi:false}}
      onSubmit={(values,{resetForm}) => {
    
        dispatch(addRoomThunk(values))
        setOpen(false);
        resetForm();
        alertSuccessCenter('Thêm dữ liệu thành công')

        
       
  
     
      }}
      validationSchema={SignupSchema}

    >
      {({ handleSubmit,setFieldValue,values }) => (
        <Form onSubmit={handleSubmit}>
            <div className="flex gap-3 ">
            <div className='w-[50%]'>
            <label htmlFor="name">Tên Phòng:</label>
            <Field type="text" id="tenPhong" name="tenPhong" className="outline-none border block w-[100%] h-[30px] px-3 mb-3"/>
            <ErrorMessage name="tenPhong" component="div" className="text-red-500" />
          </div>
          <div className='w-[50%]'>
            <label htmlFor="hinhAnh">Giá Tiền:</label>
            
            <Field type="text" id="giaTien" name="giaTien" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="giaTien" component="div" className="text-red-500" />
          </div>
            </div>
            <div className='mt-1'>
            <label htmlFor="hinhAnh">Hình Ảnh:</label>
            
            <Field type="text" id="hinhAnh" name="hinhAnh" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="hinhAnh" component="div" className="text-red-500" />
          </div>
          <div className="flex gap-3">
             <div className='w-[50%]'>
            <label htmlFor="tinhThanh">Khách:</label>
            
            <Field type="text" id="khach" name="khach" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="khach" component="div" className="text-red-500" />
          </div>
          <div className='w-[50%]'>
            <label htmlFor="quocGia">Phòng Ngủ:</label>
            <Field type="text" id="phongNgu" name="phongNgu" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />

            <ErrorMessage name="phongNgu" component="div" className="text-red-500" />
          </div>
          </div>
         <div className="flex gap-3">
               <div className='mt-1 w-[50%]'>
            <label htmlFor="hinhAnh">Gường:</label>
            
            <Field type="text" id="giuong" name="giuong" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="giuong" component="div" className="text-red-500" />
          </div>
          <div className='mt-1 w-[50%]'>
            <label htmlFor="hinhAnh">Phòng Tắm:</label>
            
            <Field type="text" id="phongTam" name="phongTam" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="phongTam" component="div" className="text-red-500" />
          </div>
         </div>

          <div className='mt-1'>
            <label htmlFor="hinhAnh">Mô tả:</label>
            
            <Field type="text" id="hinhAnh" name="moTa" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="moTa" component="div" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="quocGia">Vị Trí:</label>
            <Field as="select" id="quocGia" name="quocGia" className="outline-none border block w-[100%] h-[30px] px-3 mb-3">
            <option value="">Chọn quốc gia</option>
             {listLocation.map((item:any,index:number)=>{
                return <option key={index} value={item.id}>{item.tenViTri},{item.tinhThanh},{item.quocGia}</option>
             })}
             
              
            
    
            </Field>
            <ErrorMessage name="quocGia" component="div" className="text-red-500" />
          </div>
  <div className="flex gap-3 flex-wrap">
           <div className='w-[23%]'>
  <label htmlFor="mayGiat" className='block'>Máy giặt:</label> 
  <Field name="mayGiat">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.mayGiat}
        onChange={(checked) => setFieldValue('mayGiat', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="banLa" className='block'>Bàn Là:</label>
  <Field name="banLa">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.banLa}
        onChange={(checked) => setFieldValue('banLa', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="tivi" className='block'>Tivi:</label>
  <Field name="tivi">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.tivi}
        onChange={(checked) => setFieldValue('tivi', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="dieuHoa" className='block'>Điều hoà:</label>
  <Field name="dieuHoa">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.dieuHoa}
        onChange={(checked) => setFieldValue('dieuHoa', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="wifi" className='block'>Wifi:</label>
  <Field name="wifi">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.wifi}
        onChange={(checked) => setFieldValue('wifi', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="bep" className='block'>Bếp:</label>
  <Field name="bep">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.bep}
        onChange={(checked) => setFieldValue('bep', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="doXe" className='block'>Đỗ xe:</label>
  <Field name="doXe">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.doXe}
        onChange={(checked) => setFieldValue('doXe', checked)}
      />
    )}
  </Field>
</div>
 <div className='w-[23%]'>
  <label htmlFor="banUi" className='block'>Bàn ủi:</label>
  <Field name="banUi">
    {({ field }:any) => (
      <Switch
        {...field}
        checked={values.banUi}
        onChange={(checked) => setFieldValue('banUi', checked)}
      />
    )}
  </Field>
</div>
 
  </div>
   
        
  <div className="flex gap-3 items-end justify-end mt-5">
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

export default ModalAddRoom
