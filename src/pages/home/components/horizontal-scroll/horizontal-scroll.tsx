import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./style.css";
type Props = {};
import { dataIcon } from "./data";
import ScrollItem from "./components/scrollItem";
import { FilterIcon } from "@/assets/icons";
import { useScrollHorizontal } from "./hook";
import LoadingHorizontalScroll from "./loading/LoadingHorizontalScroll";
import { useEffect, useState } from "react";
import { getLocalStorage } from "@/utils";
import { COUNT_FILTER } from "@/constant";
import { useFilterRoom } from "../../hooks/filter-rooms.hook";
import { checkModal } from "../../actions/filter-room.actions";
export function HorizontalScroll(props: Props) {
  const [
    { tabMenuRef, btnLeftRef, btnRightRef },
    { handleScrollLeft, handleScrollRight },
  ] = useScrollHorizontal();
  const [isLoading, setIsLoading] = useState(true);
  const [,dispatch] = useFilterRoom();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return <LoadingHorizontalScroll />;
  }
  return (
    <section className="relative m-[0_80px] flex items-center justify-center gap-10 transition duration-500 ease-in">
      <div className="relative">
        <div className="relative mx-auto flex max-w-fit items-center justify-center">
          <div
            className="btnLeft absolute left-0 z-10 hidden cursor-pointer rounded-full border-[.5px] border-solid border-[#0000004d] bg-white p-1 hover:scale-110 hover:shadow-xl"
            ref={btnLeftRef}
            onClick={handleScrollLeft}
          >
            <BiChevronLeft className="text-[20px]" />
          </div>
          <div
            className="btnRight absolute right-0 z-10 cursor-pointer rounded-full border-[.5px] border-solid border-[#0000004d] bg-white p-1 hover:scale-110 hover:shadow-xl"
            ref={btnRightRef}
            onClick={handleScrollRight}
          >
            <BiChevronRight className="text-[20px]" />
          </div>
          <ul
            className="tab-menu select-none list-none overflow-x-auto scroll-smooth whitespace-nowrap rounded-md mobile:max-w-[200px]  mobilePlus:max-w-[250px] ipad:max-w-[600px] ipadPro:max-w-[800px] desktop:max-w-[1000px] desktopMax:max-w-[1500px]"
            ref={tabMenuRef}
          >
            {dataIcon.map((item, index) => (
              <ScrollItem img={item.img} content={item.content} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <button
          className="flex items-center gap-2 rounded-3xl border-[1px] border-solid border-[#dddddd] p-[14px_15px] hover:border-black hover:bg-gray-100"
          onClick={() => {
            dispatch(checkModal(true))
          }}
        >
          <FilterIcon />
          <span className="transform-none whitespace-nowrap text-[1.2rem] font-medium">
            Bộ lọc
          </span>
        </button>
        {getLocalStorage(COUNT_FILTER) ? <div className='absolute flex justify-center items-center h-7 w-7 rounded-full bg-black text-white right-[-2px] top-[-2px] text-[11px]'>
          {getLocalStorage(COUNT_FILTER)}
        </div> : null }

      </div>
    </section>
  );
}