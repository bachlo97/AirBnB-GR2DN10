
import { deleteCommentRoom } from '@/services/comment/comment.service';
import { SImg } from '../../Detail.style'

import { Tcomment } from '@/services/comment/comment.type'
import { Rate } from 'antd'
import { useState } from 'react';
import { VscEllipsis } from "react-icons/vsc";
import moment from 'moment';

function ItemComment(props:Tcomment) {
  const [active,setActive]=useState(false);
  
  return (
    <div>
          <div className='py-3'>
    <div className='flex justify-between mr-12'>
      <div className='flex gap-5'>
      <SImg>
        {props.avatar ? (
                  <div
                    className={`flex h-[100%] w-[100%] items-center justify-center rounded-full ${props.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                    style={{
                      backgroundImage: props.avatar
                        ? `url(${props.avatar})`
                        : "none",
                    }}
                  >
                    {props.avatar === "" ? props.tenNguoiBinhLuan[0].toUpperCase() : null}
                  </div>
                  
                ):(                
                  <div
                  className={`flex h-[100%] w-[100%] items-center justify-center rounded-full ${props.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                  style={{
                    backgroundImage: props.avatar
                      ? `url(${props.avatar})`
                      : "none",
                  }}
                >
                  {props.avatar === "" ? props.tenNguoiBinhLuan[0].toUpperCase() : null}
                </div>
                  
                )}
         <img className='w-[100%] h-[100%] bg-cover ' src={props.avatar} alt={props.tenNguoiBinhLuan} />
       </SImg>
       <div>
         <h4>{props.tenNguoiBinhLuan}</h4>
         <p>{moment(props.ngayBinhLuan).format('DD/MM/YYYY')}</p>
       <Rate value={props.saoBinhLuan} disabled />

       <div className='my-5'>{props.noiDung}</div>
   
       </div>
      </div>
    <div className='md:w-[200px]'>
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
