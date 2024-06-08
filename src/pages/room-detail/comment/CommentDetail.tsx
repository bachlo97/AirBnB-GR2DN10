import { SImg } from '../Detail.style'
import { FaStar } from 'react-icons/fa'
import { Rate } from 'antd'
import { ButtonPrimary } from '@/components/Button/Button'
import { useEffect, useState } from 'react'
import { Form, useNavigate, useParams } from 'react-router-dom'
import { postCommentRoom } from '@/services/comment/comment.service'
import * as Yup from 'yup';

import PageCommentDetail from './component/PageCommentDetail'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import moment from 'moment'
import { getCommentThunk } from '@/redux/comment/Comment.slice'
import useAlertHook from '@/hooks/notification/Alert'
import { Field, Formik } from 'formik'


function CommentDetail() {

 const {alertSuccessCenter}=useAlertHook()

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
const commentSlice=Yup.object().shape({
  textarea: Yup.string().required('Nhập bình luận là bắt buộc'),


});
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


       
        <Formik
         initialValues={{ textarea: ''}}
         onSubmit={async (values,{resetForm}) => {
       
         
          
          resetForm()
setPostComment({
    ...postComment,
    id: 0,
    ngayBinhLuan: moment().format('DD/MM/YYYY'),

    maPhong: id,
    noiDung:values.textarea,
    maNguoiBinhLuan:user.id,
  })
  try {
    await postCommentRoom(postComment);
    dispatch(getCommentThunk(id)); 

  } catch (e) {
    console.error(e);
  }
  alertSuccessCenter('Thêm bình luận thành công');

         }}
         validationSchema={commentSlice}
        >
       
 {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className='flex w-[100%] my-5 gap-5'>
         <div className='w-[20%] flex flex-col items-center'>
                    <SImg>
            <img  src={ user?.avatar ||'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'} alt="" />
           
          </SImg> 
          <div>{user?.name||'User'}</div>
          <Rate 
          
          
          onChange={(value)=>{   setPostComment({...postComment,saoBinhLuan:value})

          
          }}/>  
            </div>
    
          <div className="w-[100%] group-form h-[20rem] mb-[3rem]">
            <Field as="textarea" name="textarea" id="" className='border w-[100%] h-[100%] px-4 py-3 outline-none'
          
            ></Field> <br />
            <div className='text-right'>
              {user ?(

<ButtonPrimary width='150px' height={3.5} type="submit"


// setPostComment({
//     ...postComment,
//     id: 0,
//     ngayBinhLuan: moment().format('DD/MM/YYYY'),

//     maPhong: id,
    
//     maNguoiBinhLuan:user.id,
//   })
//   try {
//     await postCommentRoom(postComment);
//     dispatch(getCommentThunk(id)); 

//   } catch (e) {
//     console.error(e);
//   }
//   alertSuccessCenter('Thêm bình luận thành công');

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
        </Form>
      )}
        </Formik>
      </div>
  )
}

export default CommentDetail
