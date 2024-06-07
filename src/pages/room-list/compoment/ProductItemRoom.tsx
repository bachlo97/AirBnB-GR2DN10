
import { SProductItemText } from '@/pages/home/product/product-list/Product.style'
import { TRoom } from '@/services/room/Room.type'
import { FaRegHeart, FaRegUser, FaStar } from 'react-icons/fa'
import { IoBedOutline } from 'react-icons/io5'
import { MdBedroomChild } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
function ProductItemRoom(props:TRoom) {
    const truncateText=(text:string)=> {
        if (text.length <= 30) {
          return text;
        } else {
          return text.substring(0, 30) + "...";
        }
      }
  return (
    <NavLink  className='2sm:w-[49%] 2xl:w-[32%]' to={`/roomdetail/${props.id}`}>  
      
    <div className='relative mt-4'>
     <img className='rounded-[1rem]'  style={{height:'250px',width:'100%'}} src={props.hinhAnh} alt="" />
     <FaRegHeart className='absolute top-[5%] right-[5%] text-[2.5rem] text-white' />

    </div>
     
    
     <SProductItemText className="py-3">
         <h4 className='text-[1.8rem] font-semibold'>
           {
             truncateText(`${props.tenPhong}`)
         }   
         </h4>
         <div className="stars flex items-center sm:text-[1.2rem] md:text-[1.5rem] mb-1">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         (3 người đánh giá)
         </div>
         <p className='font-bold text-[1.8rem]'>${props.giaTien}/Đêm</p>
        <div className="product-icons flex gap-3">
        <div className='flex items-center'><IoBedOutline />:{props.giuong}</div>
            <div className='flex items-center'> <MdBedroomChild />:{props.phongNgu}</div>
            <div className='flex items-center'>  <FaRegUser />:{props.khach}</div>
        
    
        

        </div>
       
     </SProductItemText>

   </NavLink>
 
  )
}

export default ProductItemRoom
