import { useEffect, useState } from "react";
import "./style.css";
import { data } from "./data";
import { IntroItem } from "./intro";
import { Thumbail } from "./thumbail";
import { useHomeCarousel } from "./hook/";
import LoadingCarousel from "./loading/LoadingCarousel";
import { useTranslation } from "react-i18next";

export function Carousel() {
  const [{ currentIndex, btnState, thumbnailListWrapperRef }, { handleNext }] =
    useHomeCarousel(data);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return <LoadingCarousel />;
  }
  return (
    <div className="container relative m-auto flex flex-col justify-end overflow-hidden rounded-[20px] bg-[#767676] text-white mobile:h-[257px] mobile:w-[358px] ipad:h-[400px] ipad:w-[700px] ipadPro:h-[480px] ipadPro:w-[900px] desktop:h-[570px] desktop:w-[1100px] desktopPlus:h-[720px] desktopPlus:w-[1280px] desktopMax:h-[800px] desktopMax:w-[1700px]">
      <div className="flex w-full">
        <div className="introduce relative z-20 h-full w-[40%]">
          {data.map((item, index) => (
            <IntroItem
              describe={item.describe}
              country={item.country}
              place={item.place}
              index={index}
              id={item.id}
              currentIndex={currentIndex}
              key={index}
            />
          ))}
        </div>
        <div className="thumbnail-list relative h-[300px] flex-[1]">
          <div
            className="wrapper relative z-10 h-[300px]"
            ref={thumbnailListWrapperRef}
          >
            <Thumbail data={data} />
          </div>
        </div>
      </div>

      <div className="navigation z-20 flex items-center gap-[20px] mobile:relative mobile:bottom-[-50px] mobile:ml-[30%] mobile:gap-[8px] mobile:p-[53px_10px_50px_0] ipad:bottom-[-40px] ipad:ml-[35%] desktop:bottom-[-30px] desktop:ml-[37%] desktopPlus:ml-[40%] desktopPlus:p-[50px_50px_50px_0]">
        <button
          className="next-button h-[50px] rounded-[50px] border-[1px] border-solid border-white bg-transparent font-[500] uppercase text-inherit transition duration-500 ease-in-out hover:cursor-pointer hover:bg-[rgb(255,255,255,0.4)] mobile:h-[20px] mobile:w-[46px] mobile:text-[8px] ipad:h-[30px] ipad:w-[78px] ipad:text-[14px] desktop:h-[40px] desktop:w-[98px] desktop:text-[18px] desktopPlus:w-[100px] "
          onClick={handleNext}
          disabled={btnState}
        >
          {t('carousel.next')}
        </button>
        <span className="line h-[2px] flex-[1] bg-white"></span>
        <span className="ordinal-number relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden">
          {data.map((_, index: number) => (
            <h2
              key={index}
              className={`${index === currentIndex ? "translate-none" : "translate-y-[200%]"} absolute font-[400] leading-[1] transition duration-500 ease-in-out mobile:text-[19px] ipad:text-[25px] desktop:text-[30px] desktopPlus:text-[3.5rem]`}
            >{`0${index + 1}`}</h2>
          ))}
        </span>
      </div>
    </div>
  );
}
