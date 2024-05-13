import React, { useState } from 'react';
import { useTranslation } from "react-i18next"

import './Toggle.css'
import { Switch } from 'antd';
import i18n from '@/components/locales/i18n';
function ToogleHeader() {
  const {t}=useTranslation();
  const languages=[
    {code:"vi",name:"viet nam"},
    {code:'en',name:'en'}
  ]
    const [on,setOn]=useState(false);
    console.log(on ,setOn);
    const onChange = (checked: any) => {
      const value=checked ? 'vi' : 'en';
      console.log(value);
      i18n.changeLanguage(value)
    }; 
   return (
    <div className='flex gap-3 md:text-[15px] lg:text-[17px]'>
       VN
       <Switch defaultChecked onChange={onChange} />
   
      EN
 
    </div>
    
  )
}

export default ToogleHeader
