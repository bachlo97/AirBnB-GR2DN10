import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RoomItem } from "./room-array/room-item";
import ReactPaginate from "react-paginate";
import { RoomArray } from "./room-array";
type Props = {
  itemsPerPage: number;
};

export default function BookingInfo({ itemsPerPage }: Props) {
  // const []
  const roomList: any = [];
  for (let i = 0; i < 10; i++) {
    roomList.push(<RoomItem />);
  }
  const [prev,setPrev] = useState(false)
  const [next,setNext] = useState(true)
  const lenRoomList = roomList.length;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = roomList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(roomList.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    console.log("ssss", event.selected);
    const newOffset = (event.selected * itemsPerPage) % roomList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
    if(event.selected == 0){
      setPrev(false)
    }else{
      setPrev(true)
    }
    const a = Math.ceil((roomList.length /  2) - 1)
    console.log({a})
    if(event.selected == a){
      setNext(false)
    }else{
      setNext(true)
    }
  };
  return (
    <div className="flex flex-col gap-10">
      {lenRoomList ? (
        <>
          {currentItems}
          <ReactPaginate
            breakLabel={<span>...</span>}
            nextLabel={`${lenRoomList > 2 ? '>' : ''}`}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={`${lenRoomList > 2 ? '<' : ''}`}
            renderOnZeroPageCount={null}
            breakLinkClassName="text-red-500"
            pageClassName='text-blue-700'
            activeClassName="text-blue-500"
            marginPagesDisplayed={2}
            containerClassName="flex ml-auto"
            previousLinkClassName={`${prev ? 'text-green-500' : 'text-red-500 cursor-not-allowed'}`}
            nextLinkClassName={`${next ? 'text-green-500' : 'text-red-500 cursor-not-allowed'}`}
          />
        </>
      ) : <p>Không có dữ liệu để hiển thị</p>}
    </div>
  );
}
