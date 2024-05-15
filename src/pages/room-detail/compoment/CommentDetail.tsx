import { SImg } from '../Detail.style'
import { FaStar } from 'react-icons/fa'
import { Rate } from 'antd'
import { ButtonPrimary } from '@/components/Button/Button'

function CommentDetail() {
  return (
    <div className='2xl:w-3/4 mx-auto mt-8 border-t border-solid py-5'>
        <h3 className='font-semibold text-3xl mb-6'>Khách hàng đánh giá</h3>
       <div className='border-b border-solid'>
        <p>Tổng quan</p>
        <div className='flex gap-1 items-center '>  
         <h3 className='text-[2.5rem] '>4.9</h3>
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              </div>
     
    <p className='mb-3'>(409 đánh giá)</p>
       </div>
   
        


        <div className='border-b border-solid mt-3'>
          <div className='flex gap-5'>
            <SImg>
              <img className='w-[100%] h-[100%] bg-cover ' src="https://yt3.ggpht.com/Lw90L5d4JrRQGyUInde_DyOdHWJKjG0g8CvWzQkjXamdTkdg2QgiZy6VzPVmtoNgwiFmXTvVlw=s48-c-k-c0x00ffffff-no-rj" alt="" />
            </SImg>
            <div>
              <h4>Phạm Duy</h4>
              <p>Tháng 6 năm 2022</p>
              <div className='flex gap-1'>
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              <FaStar /> 
              </div>
            </div>
          </div>
          <div className='my-5'>Mọi thứ đều ok nha</div>
        </div>
        <form action="" method="post" className='flex w-[100%] my-5 gap-5'>
            <div className='w-[20%] flex flex-col items-center'>
                    <SImg>
            <img className='w-[10rem]' src="https://yt3.ggpht.com/Lw90L5d4JrRQGyUInde_DyOdHWJKjG0g8CvWzQkjXamdTkdg2QgiZy6VzPVmtoNgwiFmXTvVlw=s48-c-k-c0x00ffffff-no-rj" alt="" />
           
          </SImg> 
          <div>Phạm Duy</div>
          <Rate />  
            </div>
    
          <div className="w-[100%] group-form">
            <textarea name="" id="" className='border w-[100%] h-[20rem] px-4 py-3 outline-none'></textarea> <br />
            <div className='text-right'>
              <ButtonPrimary width='150px' height={3.5} type="submit">Thêm Bình Luận</ButtonPrimary>

            </div> 
 </div>

        </form>
      </div>
  )
}

export default CommentDetail
