import { SImg } from '../Detail.style'
import { FaStar } from 'react-icons/fa'
import { Rate } from 'antd'
import { ButtonPrimary } from '@/components/Button/Button'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postCommentRoom } from '@/services/comment/comment.service'

import PageCommentDetail from './component/PageCommentDetail'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import moment from 'moment'
import { getCommentThunk } from '@/redux/comment/Comment.slice'


function CommentDetail() {
  

  const user:any = useAppSelector((state) => state.authReducer.user);
  const listCommentRoom:any = useAppSelector((state) => state.commentSlice.listComment);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();



  
  const [postComment,setPostComment]=useState({   
     id: 0,
     maPhong: 0,
     maNguoiBinhLuan:0,
     ngayBinhLuan:'',
     noiDung:'',
     saoBinhLuan:0
  })

  
  const { id }:number = useParams();
  

  useEffect(() => {
    dispatch(getCommentThunk(id));
  }, [dispatch, id]);  
  
  console.log(listCommentRoom);

  // gui binh luan

  useEffect(()=>{
    postCommentRoom(postComment)
  },[postComment])

console.log(postComment);

let averageStar=0;
let total=0
const totalStarsRating=listCommentRoom.map((item:any)=>{
   total+=item.saoBinhLuan;
  averageStar=Math.floor(total/listCommentRoom.length)
})
  return (
    <div className='2xl:w-3/4 mx-auto mt-8 border-t border-solid py-5'>
        <h3 className='font-semibold text-3xl mb-6'>Khách hàng đánh giá</h3>
       <div className='border-b border-solid'>
        <p>Tổng quan</p>
        <div className='flex gap-1 items-center '>  
         <h3 className='text-[2.5rem] '>{averageStar}</h3>
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              </div>
     
    <p className='mb-3'>({listCommentRoom.length} đánh giá)</p>
       </div>
   
        


       <PageCommentDetail data={listCommentRoom} itemsPerPage={6}/>


       
        <form action="" method="post" className='flex w-[100%] my-5 gap-5'>
            <div className='w-[20%] flex flex-col items-center'>
                    <SImg>
            <img  src={ user?.avatar ||'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'} alt="" />
           
          </SImg> 
          <div>{user?.name||'User'}</div>
          <Rate onChange={(value)=>{   setPostComment({...postComment,saoBinhLuan:value})

          
          }}/>  
            </div>
    
          <div className="w-[100%] group-form">
            <textarea name="" id="" className='border w-[100%] h-[20rem] px-4 py-3 outline-none'
            onChange={(e)=>{
              setPostComment({...postComment,noiDung:e.target.value})

          }}
            ></textarea> <br />
            <div className='text-right'>
              {user ?(

<ButtonPrimary width='150px' height={3.5} type="submit"
onClick={async (e)=>{
  e.preventDefault();
setPostComment({
    ...postComment,
    id: 0,
    ngayBinhLuan: moment().format('DD/MM/YYYY'),

    maPhong: id,
    
    maNguoiBinhLuan:user.id,
  })
  try {
    await postCommentRoom(postComment);
    dispatch(getCommentThunk(id)); // Re-fetch comments after posting
  } catch (e) {
    console.error(e);
  }
}}
>Thêm Bình Luận</ButtonPrimary>
              ):(
<ButtonPrimary width='150px' height={3.5} type="submit"
onClick={(e)=>{
  navigate('/auth/signin')

 
}}
>Thêm Bình Luận</ButtonPrimary>
                
              )}
             

            </div> 
 </div>

        </form>
      </div>
  )
}

export default CommentDetail
