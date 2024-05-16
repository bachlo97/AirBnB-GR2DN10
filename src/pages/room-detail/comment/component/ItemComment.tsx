
import { SImg } from '../../Detail.style'

import { Tcomment } from '@/services/comment/comment.type'
import { Rate } from 'antd'

function ItemComment(props:Tcomment) {
  return (
    <div>
    <div className='flex gap-5'>
       <SImg>
         <img className='w-[100%] h-[100%] bg-cover ' src={props.avatar} alt={props.tenNguoiBinhLuan} />
       </SImg>
       <div>
         <h4>{props.tenNguoiBinhLuan}</h4>
         <p>{props.ngayBinhLuan}</p>
       <Rate value={props.saoBinhLuan} disabled />

       </div>
     </div>
     <div className='my-5'>{props.noiDung}</div>
   </div>
  )
}

export default ItemComment
