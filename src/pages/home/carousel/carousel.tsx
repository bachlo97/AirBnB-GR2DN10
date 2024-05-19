import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { data } from "./data";
import { IntroItem } from "./intro";
import { Thumbail } from "./thumbail";
import {
    useHomeCarousel,
} from "./hook/";
import LoadingCarousel from "./loading/LoadingCarousel";
type Props = object;

export function Carousel(props: Props){


    const [{currentIndex,btnState,thumbnailListWrapperRef},{handleNext}] = useHomeCarousel(data)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1500);
    }, []);
  
    if (isLoading) {
      return <LoadingCarousel/>
      }
    return (
        <div className="container relative m-auto flex desktopPlus:h-[720px] desktopPlus:w-[1280px] mobile:h-[257px] mobile:w-[358px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#767676] text-white ipad:w-[700px] ipad:h-[400px] desktop:h-[570px] desktop:w-[1100px]">
            <div className="flex w-full">
                <div className="introduce relative z-20 h-full w-[40%]">
                    {data.map((item, index) => (
                        <IntroItem
                            describe={item.describe}
                            country={item.country}  
                            place={item.place}
                            index={index}
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

            <div className="navigation z-20 desktopPlus:ml-[40%] flex items-center gap-[20px] desktopPlus:p-[50px_50px_50px_0] mobile:relative mobile:bottom-[-50px] mobile:p-[53px_10px_50px_0] mobile:gap-[8px] mobile:ml-[30%] ipad:ml-[35%] ipad:bottom-[-40px] desktop:ml-[37%] desktop:bottom-[-30px]">
                <button
                    className="next-button desktopPlus:w-[100px] rounded-[50px] bg-transparent border-[1px] border-solid border-white text-inherit font-[500] uppercase h-[50px] transition duration-500 ease-in-out hover:cursor-pointer hover:bg-[rgb(255,255,255,0.4)] mobile:text-[8px] mobile:w-[46px] mobile:h-[20px] ipad:text-[14px] ipad:w-[78px] ipad:h-[30px] desktop:text-[20px] desktop:w-[98px] desktop:h-[40px]"
                    onClick={handleNext}
                    disabled={btnState}
                >
                    Next
                </button>
                <span className="line h-[2px] flex-[1] bg-white"></span>
                <span
                    className="ordinal-number relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden"
                >
                    {data.map((item, index: number) => (
                        <h2
                            key={index}
                            className={`${index === currentIndex ? "translate-none" : "translate-y-[200%]"} absolute desktopPlus:text-[3.5rem] font-[400] leading-[1] transition duration-500 ease-in-out mobile:text-[19px] ipad:text-[25px] desktop:text-[30px]`}
                        >{`0${index + 1}`}</h2>
                    ))}
                </span>
            </div>
        </div>
    );
}


