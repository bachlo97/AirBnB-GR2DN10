
import { Fragment, useEffect, useState } from 'react';
import { BsTranslate } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import InformationDetailRoom from './compoment/InformationDetailRoom';
import { ButtonPrimary } from '@/components/Button/Button';
import { SImg } from './Detail.style';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import { TRoomDetail } from '@/services/room-detail/RoomDetail.type';
import { IIFE } from '@/utils';
import { GetRoomDetail } from '@/services/room-detail/RoomDetail.service';
import { Container } from '@/components/style-compoment/Container';
import RoomDetailLoading from './loading/RoomDetailLoading';
import CommentDetail from './comment/CommentDetail';

type Props = object

const RoomDetail = (_props: Props) => {
  const { id } = useParams();
    

  const [dataRoomDetail,setDataRoomDetail]=useState<TRoomDetail>({})
  useEffect(()=>{
    IIFE(async ()=>{
      try{
        const data=await GetRoomDetail(id);
        const content=data.content;
        setDataRoomDetail(content)
      }catch(e){
        console.log(e);
        
      }
    })
  },[id])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <RoomDetailLoading/>
    }

  return (
    <Fragment>
  

    <Container>
      <div className='justify-between mb-4 sm:hidden 2sm:flex'>
        <div className='flex gap-3 items-center'>
          <BsTranslate className='text-4xl' />
          <h3 className='font-bold md:text-3xl lg:text-4xl'>{dataRoomDetail.tenPhong}</h3>

        </div>
        <div className='flex gap-4'>
          <div className='flex gap-3 items-center'>
            <IoShareOutline />
            Chia sẽ
          </div>
          <div className='flex gap-3 items-center'>
            <CiHeart />

            Yêu thích
          </div>
        </div>

      </div>
      <div className='relative'>
        <div className='absolute top-3 left-4 flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] 2sm:hidden'>
          <IoIosArrowBack />


        </div>
        <img src={dataRoomDetail.hinhAnh} className='rounded-[1.5rem] w-[100%] sm:h-[200px] 2sm:h-[100%] mb-3' alt="" />
        <div className='icons flex gap-3 text-3xl absolute top-3 text-black right-8 2sm:hidden'>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
            <IoShareOutline />

          </div>
          <div className='flex gap-3 items-center justify-center w-[35px] h-[35px] bg-white rounded-[50%] '>
            <CiHeart />

          </div>
        </div>
      </div>

      {/* Thông tin chi tiết và thanh toán */}
      <InformationDetailRoom data={dataRoomDetail}/>
      {/* Bình luận */}
    <CommentDetail/>

    </Container>

 
  </Fragment>
  )
}

export default RoomDetail