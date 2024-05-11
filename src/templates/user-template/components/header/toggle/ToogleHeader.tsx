import React, { useState } from 'react';

import './Toggle.css'
import { Switch } from 'antd';
function ToogleHeader() {
    const [on,setOn]=useState(false);
    console.log(on ,setOn);
    const onChange = (checked: any) => {
      console.log(`switch to ${checked}`);
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
