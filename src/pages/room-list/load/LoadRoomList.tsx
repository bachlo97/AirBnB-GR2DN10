/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@/components/StyleCompoment/StyleCompoment'

import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { TRoom } from '@/services/room/Room.type'
import { IIFE } from '@/utils'
import { getRoomsList } from '@/services/room/RoomsList.style'

import { useAppSelector } from '@/redux/hooks'
import { SButtonRoomList, SMap, SMapRespon, SRespon } from '../RoomList.style'
import ListProductRoom from '../Scompoment/ListProductRoom'
import LoadListRoom from './LoadListRoom'


function LoadRoomList(props: { data: any[] }) {
 
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
           <Skeleton className='text-xl text-gray-600 w-[200px] h-[20px]'></Skeleton>
        <Skeleton className='text-[2.5rem] font-semibold w-[400px] h-[30px] mt-3'></Skeleton>   
       <div className='flex gap-5 my-4'>
         <Skeleton className='text-[1.3rem] w-[100px] h-[35px] rounded-[1.5rem]'>
          
        </Skeleton>
         <Skeleton className='text-[1.3rem] w-[100px] h-[35px] rounded-[1.5rem]'>
          
        </Skeleton>
         <Skeleton className='text-[1.3rem] w-[100px] h-[35px] rounded-[1.5rem]'>
          
        </Skeleton>
         <Skeleton className='text-[1.3rem] w-[100px] h-[35px] rounded-[1.5rem]'>
          
        </Skeleton>
         <Skeleton className='text-[1.3rem] w-[100px] h-[35px] rounded-[1.5rem]'>
          
        </Skeleton>
         
       </div>
       </SRespon>
    <div>
      <LoadListRoom data={props.data}></LoadListRoom>
    </div>
        </div>   
        <SMap className='lg:w-3/5 xl:w-2/5'>
        <Skeleton
        
     width="100%" height='100%' ></Skeleton>            {/*  */}
        </SMap>
       
        </div>
       
      

        </Container>    
     
</Fragment>
  )
}

export default LoadRoomList
