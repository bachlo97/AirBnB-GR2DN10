import React, { useState } from 'react';

import './Toggle.css'
function ToogleHeader() {
    const [on,setOn]=useState(false);
    console.log(on ,setOn);

const handleToggle=()=>{
    setOn(on => !on);

}
   return (
    <div className='flex gap-3 md:text-[15px] lg:text-[17px]'>
       VN
      <div className={`toggle ${on ? 'active' :""}`} onClick={handleToggle}>

   <div className={`spinner ${on ? 'active' :""}`}></div>

    
    </div>  
   
      EN
    </div>
    
  )
}

export default ToogleHeader
