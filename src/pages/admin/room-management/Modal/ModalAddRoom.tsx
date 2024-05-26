import { Modal, Space, Switch } from 'antd';
import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAdminLocationThunk } from '@/redux/admin-location/AdminLocation.slice';


function ModalAddRoom() {
    const [open, setOpen] = useState(false);
    const listLocation:any = useAppSelector((state) => state.locationSlice.listLocation);
    const dispatch = useAppDispatch();
    useEffect(()=>{

        dispatch(getAdminLocationThunk())
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
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
      };
      
  return (
    <>
    <Space>
      <div onClick={showModal} className='cursor-pointer'>
        Thêm mới
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
<Formik
      initialValues={{ tenPhong: '', giaTien: '' ,hinhAnh:'',khach:'',phongNgu:'',guong:'',phongTam:'',quocGia:'',mayGiat:false,banLa:false,tivi:false,dieuHoa:false,wifi:false,bep:false,doXe:false,banUi:false}}
      onSubmit={(values) => {
    
        console.log(values);
        
       
  
     
      }}

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
            
            <Field type="text" id="guong" name="guong" className="outline-none border block w-[100%] h-[30px] px-3 mb-3" />
            <ErrorMessage name="guong" component="div" className="text-red-500" />
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
   
        
          <button type="submit">Gửi</button>
        </Form>
      )}
    </Formik>
    
    </Modal>
  </>
  )
}

export default ModalAddRoom
