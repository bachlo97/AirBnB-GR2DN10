import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { useTransition } from "@react-spring/web";
export const useBookingInfo = (hearts: boolean[], itemsPerPage: number) => {
  const roomBookingList: any = useAppSelector(
    (state) => state.bookingHistoryReducer.roomBookingList,
  );
  console.log({ hearts });

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const lenRoomList = roomBookingList.length;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = roomBookingList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(roomBookingList.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    console.log("ssss", event.selected);
    const newOffset = (event.selected * itemsPerPage) % roomBookingList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
    if (event.selected == 0) {
      setPrev(false);
    } else {
      setPrev(true);
    }
    const a = Math.ceil(roomBookingList.length / 2 - 1);
    console.log({ a });
    if (event.selected == a) {
      setNext(false);
    } else {
      setNext(true);
    }
  };

  const transitions = useTransition(itemOffset, {
    from: { opacity: 0, transform: "perspective(600px) rotateY(180deg)" },
    enter: { opacity: 1, transform: "perspective(600px) rotateY(0deg)" },
    leave: {
      opacity: 0,
      transform: "perspective(600px) rotateY(-180deg)",
      display: "none",
    },
    config: { duration: 500 },
  });

  return [
    { prev, next, itemOffset, lenRoomList, currentItems, pageCount },
    { handlePageClick, transitions },
  ];
};
