import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"

import './Toggle.css'
import { Switch } from 'antd';
import i18n from '@/components/locales/i18n';
import { TextPrimary } from '@/components/style-compoment/StyleCompoment';
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

      {on? 'VN'     :<TextPrimary className='text'>
         VN
        </TextPrimary> }

     
       <Switch defaultChecked={on} onChange={onChange} />
   
       {on?   <TextPrimary className='text'>
        EN
        </TextPrimary>    :'EN'}
 
    </div>
    
  )
}

export default ToogleHeader