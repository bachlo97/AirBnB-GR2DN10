import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

import './Toggle.css'
import { Switch } from 'antd';
import i18n from '@/components/locales/i18n';
function ToogleHeader() {

  
    const [on,setOn]=useState(false);
 useEffect(()=>{
  i18n.changeLanguage('vi')
 },[])
    const onChange = (checked: any) => {
      const value=checked ? 'en' : 'vi';
      setOn(checked);
      i18n.changeLanguage(value)
    }; 
   return (
    <div className='flex gap-3 md:text-[15px] lg:text-[17px]'>
       VN
       <Switch defaultChecked={on} onChange={onChange} />
   
      EN
 
    </div>
    
  )
}

export default ToogleHeader