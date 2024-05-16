/* eslint-disable react-hooks/rules-of-hooks */
import { SImg } from '../Detail.style'
import { FaStar } from 'react-icons/fa'
import { Rate } from 'antd'
import { ButtonPrimary } from '@/components/Button/Button'
import { useEffect, useRef, useState } from 'react'
import { TcommentAPI } from '@/services/comment/comment.type'
import { useParams } from 'react-router-dom'
import { getCommentRoomId, postCommentRoom } from '@/services/comment/comment.service'
import { IIFE } from '@/utils'
import PageCommentDetail from './component/PageCommentDetail'
import { useAppSelector } from '@/redux/hooks'
import moment from 'moment'


function CommentDetail() {
  const [listComemt,setListComment]=useState<TcommentAPI[]>([]);
  const user:any = useAppSelector((state) => state.authReducer.user);

  const [postComment,setPostComment]=useState({   
     id: 0,
     maPhong: 0,
     maNguoiBinhLuan:0,
     ngayBinhLuan:'',
     noiDung:'',
     saoBinhLuan:0
  })
  const { id } = useParams();
  useEffect(()=>{
    IIFE(async ()=>{
      try{
        const data=await getCommentRoomId(id);
        const content=data.content;
        setListComment(content)
      }catch(e){
        console.log(e);
        
      }
    })
  },[id])

  // gui binh luan

  useEffect(()=>{
    postCommentRoom(postComment)
  },[postComment])

console.log(postComment);

let averageStar=0;
let total=0
const totalStarsRating=listComemt.map((item)=>{
   total+=item.saoBinhLuan;
  averageStar=Math.floor(total/listComemt.length)
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
     
    <p className='mb-3'>({listComemt.length} đánh giá)</p>
       </div>
   
        


       <PageCommentDetail data={listComemt} itemsPerPage={5}/>


       
        <form action="" method="post" className='flex w-[100%] my-5 gap-5'>
            <div className='w-[20%] flex flex-col items-center'>
                    <SImg>
            <img  src={ user.avatar} alt="" />
           
          </SImg> 
          <div>Phạm Duy</div>
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
              <ButtonPrimary width='150px' height={3.5} type="submit"
              onClick={(e)=>{
                e.preventDefault();
                setPostComment({
                  ...postComment,
                  id: 0,
                  ngayBinhLuan: moment().format('DD/MM/YYYY'),
        
                  maPhong: id,
                  
                  maNguoiBinhLuan:user.id,
                })
              }}
              >Thêm Bình Luận</ButtonPrimary>

            </div> 
 </div>

        </form>
      </div>
  )
}

export default CommentDetail
