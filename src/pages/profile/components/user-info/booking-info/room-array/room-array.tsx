import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import { RoomItem } from './room-item';

type Props = {
    currentItems: TBookingHistory[]
    itemOffset:any
    hearts: boolean[]
    toggleHeart: (index:number) => void
}

export function RoomArray({currentItems,itemOffset,hearts,toggleHeart}: Props) {
  return (
    <div>
        {currentItems &&
            currentItems.map((item,index) => (
              <RoomItem  data={item} heartIndex={itemOffset+index} hearts={hearts} toggleHeart={toggleHeart}/>
            ))}
    </div>
);
}