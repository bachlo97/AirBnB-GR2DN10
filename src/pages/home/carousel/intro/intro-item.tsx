import React from "react";

type Props = {
    country: string;
    place: string;
    describe: string;
    index: number;
    currentIndex: number | undefined;
};

export const IntroItem = ({
    country,
    place,
    describe,
    currentIndex,
    index,
}: Props) => {
    // const
    return (
        <div
            className={`wrapper ${index === currentIndex ? "pointer-events-auto" : "pointer-events-none"} absolute desktopPlus:bottom-0 left-0 flex h-fit w-full flex-col justify-end desktopPlus:p-[0_25px_0_50px] mobile:bottom-[-97px] mobile:left-[-26px] mobile:p-[0_0_0_50px] ipad:bottom-[-48px] desktop:bottom-[-40px]`}
        >
            <span className="overflow-hidden">
                <h5
                    className={`${index === currentIndex ? "translate-y-0 opacity-100 delay-[calc(0.1)]" : "translate-y-[300px] opacity-0 delay-[calc(3)]"} ml-1 desktopPlus:text-[1.5rem] font-[400]  transition duration-500 ease-in-out mobile:text-[8px] ipad:text-[12px] desktop:text-[22px]`}
                >
                    {country}
                </h5>
            </span>
            <span className="overflow-hidden">
                <h1
                    className={`${index === currentIndex ? "translate-y-0 opacity-100 delay-[calc(0.1)] " : "translate-y-[300px] opacity-0 delay-[calc(2.9)]"}  mt-[10px] desktopPlus:text-[5.5rem] desktopPlus:leading-[64px] font-[400] uppercase leading-[1.1] tracking-[1px] transition  duration-500 ease-in-out mobile:text-[10px] ipad:text-[20px] ipad:leading-[25px] desktop:text-[35px] desktop:leading-[43px]`}
                >
                    {place}
                </h1>
            </span>
            <span className="overflow-hidden">
                <p
                    className={`${index === currentIndex ? "translate-y-0 opacity-100 delay-[calc(0.2)] " : "translate-y-[300px] opacity-0 delay-[calc(2.8)]"} mt-[8px] desktopPlus:text-[1.5rem] font-[300] transition duration-500 ease-in-out mobile:text-[8px] ipad:text-[12px] desktop:text-[20px]`}
                >
                    {describe}
                </p>
            </span>
            <span className="overflow-hidden">
                <button
                    className={`${index === currentIndex ? "translate-y-0 opacity-100 delay-[calc(0.3)] " : "translate-y-[300px] opacity-0 delay-[calc(2.7)]"} desktopPlus:mt-[20px]  desktopPlus:h-[50px] desktopPlus:w-[250px]  rounded-full transition duration-500 ease-in-out bg-transparent border-[1px] border-solid border-white text-inherit font-[500] uppercase hover:cursor-pointer hover:bg-[rgb(255,255,255,0.4)] mobile:text-[5px] mobile:w-[58px] mobile:mt-[10px] mobile:h-[20px] ipad:text-[8px] ipad:w-[80px] ipad:h-[25px] desktop:text-[12px] desktop:w-[120px] desktop:h-[38px] desktop:mt-[15px]`}
                >
                    Discover now
                </button>
            </span>
        </div>
    );
};