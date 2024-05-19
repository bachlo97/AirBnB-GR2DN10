
import { deleteCommentRoom } from '@/services/comment/comment.service';
import { SImg } from '../../Detail.style'

import { Tcomment } from '@/services/comment/comment.type'
import { Rate } from 'antd'
import { useState } from 'react';
import { VscEllipsis } from "react-icons/vsc";

function ItemComment(props:Tcomment) {
  const [active,setActive]=useState(false);
  
  return (
    <div>
          <div className='py-3'>
    <div className='flex justify-between mr-12'>
      <div className='flex gap-5'>
      <SImg>
         <img className='w-[100%] h-[100%] bg-cover ' src={props.avatar} alt={props.tenNguoiBinhLuan} />
       </SImg>
       <div>
         <h4>{props.tenNguoiBinhLuan}</h4>
         <p>{props.ngayBinhLuan}</p>
       <Rate value={props.saoBinhLuan} disabled />

       <div className='my-5'>{props.noiDung}</div>
   
       </div>
      </div>
    <div className='w-[200px]'>
         <div className='cursor-pointer flex items-center justify-center'>
          <button onClick={()=>{
            setActive(!active);
          }}>
             <VscEllipsis />
          </button>
        
       </div>
  {active ?(
     <div className='w-[120px] m-auto p-3 shadow-md text-center'>
     <div className=''>
       <div>
         <button
        
         >Chỉnh sửa</button> 
       </div>
       <div>
         <button onClick={async ()=>{
          await deleteCommentRoom(props.id);
          

         }}>Xoá</button> 
       </div>
        
 
    
     </div>
    </div>

  ):''}
    </div> 
    
      
     </div>

   </div>
    </div>

  )
}

export default ItemComment
