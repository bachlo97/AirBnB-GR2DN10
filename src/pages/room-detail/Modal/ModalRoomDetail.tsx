/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonPrimaryTwo } from '@/components/Button/Button';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { PiTelevisionSimpleBold } from 'react-icons/pi';

type Props={
    tivi:string;
    banLa:string;
    dieuHoa:string;
    mayGiat:string;
    wifi:string;
    bep:string;
    doXe:string;
    hoBoi:string;
    banUi:string;
}
function ModalRoomDetail(props:Props) {
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
      <ButtonPrimaryTwo width='12rem' height={3.5} className='rounded-[1rem]'  onClick={showModal}>
         Xem Thêm
        </ButtonPrimaryTwo> 
        <Modal
        open={open}
        title="Địa điểm này có gì"
        onOk={handleOk}
        onCancel={handleCancel}
   
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            
            <CancelBtn />
            <OkBtn/>
          </>
        )}
      >
    <div className=""> 
    <h2 className='font-semibold text-[1.7rem]'>Đồ gia dụng</h2>
    {props.tivi ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              Tivi
            </div>
              ):''}
    {props.mayGiat ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              mayGiat
            </div>
              ):''}
    
    {props.banLa ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              banLa
            </div>
              ):''}
    {props.banUi ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              banUi
            </div>
              ):''}
    

    
             
     
          
          </div>
    <div className=""> 
    <h2 className='font-semibold text-[1.7rem]'>Phòng</h2>
    {props.doXe ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              doXe
            </div>
              ):''}
    {props.bep ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              bep
            </div>
              ):''}
    

    {props.tivi ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              phongNgu
            </div>
              ):''}
    

    
             
     
          
          </div>
    <div className=""> 
    <h2 className='font-semibold text-[1.7rem]'>Các Thứ Khác</h2>
    {props.dieuHoa ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              dieuHoa
            </div>
              ):''}
    {props.wifi ? (
                <div className="flex  items-center gap-3 text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              wifi
            </div>
              ):''}
    
    {props.hoBoi ? (
                <div className="flex  items-center gap-3  text-[2.0rem] py-3 border-b border-b-gray-300 border-solid">
         
              <PiTelevisionSimpleBold />
              hoBoi
            </div>
              ):''}

    
             
     
          
          </div>
      </Modal>
    </>
  )
}

export default ModalRoomDetail
