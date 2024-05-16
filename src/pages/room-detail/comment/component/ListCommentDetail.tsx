
import { Tcomment } from '@/services/comment/comment.type'
import ItemComment from './ItemComment'

function ListCommentDetail(props:any) {
  return (
    <div>
      {  props.listComemt.map((item:Tcomment)=>{
      return  <div className='border-b border-solid mt-3'>
     <ItemComment
         id={item.id}
         ngayBinhLuan={item.ngayBinhLuan}
         saoBinhLuan={item.saoBinhLuan}
         noiDung={item.noiDung}
         tenNguoiBinhLuan={item.tenNguoiBinhLuan}
         avatar={item.avatar}

       
     />
       </div>
         
    })}
    </div>
  )
}

export default ListCommentDetail
