import { Button, Collapse, DatePicker, Modal, Select, Space, theme } from 'antd';
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io';

import './ModalHeader.style.css';
import { useSearchBarHook } from '../../hooks/useSearchBarHook';
import { ButtonPrimary } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
function ModalHeader() {
  const { t } = useTranslation();

    const {  navigate,
        dispatch,
        isOpen,
       
        valueId,
        valueStartDay,
        valueEndDay,
        dataOption,
        searchBarRef,
        handleFieldClick,
        handleDateChange,
        handleChange,
        handleSubmit}=useSearchBarHook();
        const onSearch = (value:any) => {
            console.log('search:', value);
          };
          const filterOption = (input: string, option: { label: any; }) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
        
const getItems = (panelStyle:any) => [
  {
    key: '1',
    label: 'Địa điểm',
    children:   <div 

  
    
  >
    
    <p className="text-[1.5rem] text-gray-500">
      <Select
        placeholder={'Địa điểm'}
        className=" w-[100%]"
        allowClear

        onChange={handleChange}
        options={dataOption}
        showSearch
        onSearch={onSearch}
           filterOption={filterOption}

      />
    </p>
  </div>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Ngày đến',
    children: <Space direction="vertical" 
    className='w-[100%]'>
    <DatePicker
      placeholder='Ngày đến'
     
      name="currentDay"
      className='w-[100%]'
      popupClassName="calendar-header"
      disabledDate={(current) => current && current.valueOf() < Date.now()}

    />
  </Space>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Ngày về',
    children: <Space direction="vertical" 
    className='w-[100%]'>
    <DatePicker
      placeholder='Ngày về'
     
      name="currentDay"
      className='w-[100%]'
      popupClassName="calendar-header"
      disabledDate={(current) => current && current.valueOf() < Date.now()}

    />
  </Space>,
    style: panelStyle,
  },
];
    const [open, setOpen] = useState(false);
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      
        
 
    };
    const handleCancel = () => {
      setOpen(false);
    };
      const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <form onSubmit={handleSubmit} method="get" action="">
       <Space>
 
        <div className="flex flex-col justify-center items-center"
      onClick={showModal}
      >
        
        <IoMdSearch  className="text-[2.3rem]"/>
        <div className="text-[1.5rem]">{t('header.look')}</div>
        
</div> 
       
      </Space>
      <Modal
        open={open}
        title="Bạn đang tìm kiếm địa điểm ?"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { CancelBtn }) => (
          <>
      
            <CancelBtn />
            <ButtonPrimary type='submit' width='80px' height={3} className='ml-3'
        onClick={()=>{
            setOpen(false);
            navigate(`/roomlist/${valueId}`);
        }}>Tìm Kiếm</ButtonPrimary>
          </>
        )}

        rootClassName='panelStyle'
      >
        <Collapse
      bordered={false}
      defaultActiveKey={['1']}
   
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
     
    />
      </Modal>
    
    </form>
  )
}

export default ModalHeader
