import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RoomItem } from "./room-array/room-item";
import ReactPaginate from "react-paginate";
import { RoomArray } from "./room-array";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { useAppSelector } from "@/redux/hooks";
type Props = {
  itemsPerPage: number;
};

export default function BookingInfo({ itemsPerPage }: Props) {
  const roomBookingList = useAppSelector(state => state.bookingHistoryReducer.roomBookingList)

  const roomList: any = [];
  for (let i = 0; i < 20; i++) {
    roomList.push(
      <div>
        <p className="text-1">{i}</p>
        <RoomItem />
      </div>,
    );
  }
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
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
    if (event.selected == 0) {
      setPrev(false);
    } else {
      setPrev(true);
    }
    const a = Math.ceil(roomList.length / 2 - 1);
    console.log({ a });
    if (event.selected == a) {
      setNext(false);
    } else {
      setNext(true);
    }
  };
  return (
    <div className="flex flex-col gap-10">
      {lenRoomList ? (
        <>
          {currentItems}
          <ReactPaginate
            breakLabel={
              <span className="text-[16px] tracking-widest text-gray-900">
                ...
              </span>
            }
            breakClassName="ml-8"
            nextLabel={lenRoomList > 2 ? <MdOutlineArrowForwardIos /> : ""}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={lenRoomList > 2 ? <MdOutlineArrowBackIosNew /> : ""}
            renderOnZeroPageCount={null}
            breakLinkClassName="text-red-500"
            pageClassName="text-gray-900 inline-block ml-8 w-10 h-10 flex justify-center items-center hover:bg-[#e73b9054] rounded-full"
            pageLinkClassName="hover:text-gray-900"
            activeClassName="bg-[#f31c7bba]"
            activeLinkClassName="text-white"
            marginPagesDisplayed={2}
            containerClassName="flex ml-auto flex-wrap"
            previousLinkClassName={`${prev ? "text-gray-900 hover:text-gray-900" : "cursor-not-allowed text-gray-200 hover:text-gray-200"} text-[15px]`}
            previousClassName={`${prev ? "hover:bg-[#e73b9054] rounded-full w-10 h-10" : ""} self-center ml-8 flex justify-center items-center`}
            nextClassName={`${next ? "hover:bg-[#e73b9054] rounded-full w-10 h-10" : ""} self-center ml-8 flex justify-center items-center`}
            nextLinkClassName={`${next ? "text-gray-900 hover:text-gray-900" : "cursor-not-allowed text-gray-200 hover:text-gray-200"} text-[15px]`}
          />
        </>
      ) : (
        <p>Không có dữ liệu để hiển thị</p>
      )}
    </div>
  );
}
