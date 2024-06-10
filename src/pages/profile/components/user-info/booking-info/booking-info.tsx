import ReactPaginate from "react-paginate";
import { RoomArray } from "./room-array";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { animated } from "@react-spring/web";
import { useBookingInfo } from "./hook/booking-info.hook";
type Props = {
  itemsPerPage: number;
  data: TBookingHistory;
  hearts: boolean[];
  toggleHeart: (index: number) => void;
};

export default function BookingInfo({
  itemsPerPage,
  hearts,
  toggleHeart,
}: Props) {
  const [
    { prev, next, itemOffset, lenRoomList, currentItems, pageCount },
    { handlePageClick, transitions },
  ] = useBookingInfo(hearts, itemsPerPage);

  return (
    <div className="flex flex-col gap-10 overflow-hidden">
      {lenRoomList ? (
        <>
          {transitions &&
            transitions((props) => {
              return (
                <animated.div style={props}>
                  <RoomArray
                    currentItems={currentItems}
                    itemOffset={itemOffset}
                    hearts={hearts}
                    toggleHeart={toggleHeart}
                  />
                </animated.div>
              );
            })}

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
            pageCount={pageCount!}
            previousLabel={lenRoomList > 2 ? <MdOutlineArrowBackIosNew /> : ""}
            renderOnZeroPageCount={null}
            breakLinkClassName="text-red-500"
            pageClassName={`${lenRoomList > 2 ? "text-gray-900 inline-block ml-8 w-10 h-10 flex justify-center items-center hover:bg-[#e73b9054] rounded-full" : "hidden"}`}
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
        <p className="mx-auto flex flex-col items-center text-[25px]">
          Không có dữ liệu để hiển thị <FaInbox />
        </p>
      )}
    </div>
  );
}
