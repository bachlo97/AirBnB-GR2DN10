import { Container } from '@/components/StyleCompoment/StyleCompoment'

import { Fragment, useEffect, useState } from 'react'
import { SButtonRoomList, SMap, SMapRespon, SRespon } from './RoomList.style'

import ListProductRoom from './compoment/ListProductRoom'

import LoadRoomList from './load/LoadRoomList'

import { useRoomListHook } from './hooks/UseRoomListHook'


function RoomList() {
 const {roomDate,dispatch,dataLocation}=useRoomListHook();
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
    }, []);
  
    if (isLoading) {
      return <LoadRoomList data={dataLocation}/>
      }
  
  return (
    <Fragment>
      

        <Container> 

        <SMapRespon>
          
           <iframe
            
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15672.855867132948!2d106.59377735!3d10.8713242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1713872185758!5m2!1sen!2s" width="100%" height='300px'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>    
              </SMapRespon>
            <div className="2sm:flex sm:mt-[21rem] 2sm:mt-0 bg-white">
            
            <div className='lg:w-3/5 xl:w-3/5'>
                <SRespon className=''>
                  {/* {diffInDays+1} */}
               <p className='text-xl text-gray-600'>Hơn 300 chỗ ở {roomDate.startDate} - {roomDate.endDate}</p>
            <h3 className='text-[2.5rem] font-semibold'>Chỗ ở tại khu vực bản đồ đã chọn</h3>   
           <div className='flex gap-5 my-4'>
             <SButtonRoomList className='text-[1.3rem]'>
                Loại nơi ở
            </SButtonRoomList>
             <SButtonRoomList className='text-[1.3rem]'>
                Giá
            </SButtonRoomList>
             <SButtonRoomList className='text-[1.3rem]'>
                Đ ngay
            </SButtonRoomList>
             <SButtonRoomList className='text-[1.3rem]'>
               ặt Phòng và phòng ngủ
            </SButtonRoomList>
             <SButtonRoomList className='text-[1.3rem]'>
                Bộ lọc khác
            </SButtonRoomList>
           </div>
           </SRespon>
        <div>
          <ListProductRoom data={dataLocation}></ListProductRoom>
        </div>
            </div>   
            <SMap className='lg:w-3/5 xl:w-2/5 mb-5'>
            <iframe
            
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15672.855867132948!2d106.59377735!3d10.8713242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1713872185758!5m2!1sen!2s" width="100%" height='100%'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            {/*  */}
            </SMap>
           
            </div>
           
          

            </Container>    
         
    </Fragment>
  )
}

export default RoomList
