import Skeleton from "react-loading-skeleton";

function InformationDetailLoading() {
  return (
    <div className="relative mx-auto my-3 mt-8 justify-between 2sm:flex lg:w-[100%] 2xl:w-3/4">
      <div className="md:w-[50%] xl:w-[60%]">
        <Skeleton className="h-[25px] w-[300px] text-[2rem] font-bold"></Skeleton>
        <div className="flex gap-3 pt-4">
          <Skeleton width={50} height={25}></Skeleton>
          <Skeleton width={50} height={25}></Skeleton>
          <Skeleton width={50} height={25}></Skeleton>
        </div>
        <Skeleton width="100%" height={2}></Skeleton>
        <div className="py-4">
          <div className="mt-8 flex gap-3">
            <Skeleton width={35} height={35}></Skeleton>
            <div className="">
              <Skeleton className="h-[20px] w-[150px] font-bold"></Skeleton>
              <Skeleton className="h-[20px] w-[250px]"></Skeleton>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Skeleton width={35} height={35}></Skeleton>
            <div className="">
              <Skeleton className="h-[20px] w-[150px] font-bold"></Skeleton>
              <Skeleton className="h-[20px] w-[250px]"></Skeleton>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Skeleton width={35} height={35}></Skeleton>
            <div className="">
              <Skeleton className="h-[20px] w-[150px] font-bold"></Skeleton>
              <Skeleton className="h-[20px w-[250px]"></Skeleton>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <Skeleton width={35} height={35}></Skeleton>
            <div className="">
              <Skeleton className="h-[20px] w-[150px] font-bold"></Skeleton>
              <Skeleton className="h-[20px] w-[250px]"></Skeleton>
            </div>
          </div>
        </div>
        <Skeleton width="100%" height={2}></Skeleton>

        <div className=" pt-8">
          <Skeleton className="mb-3 h-[25px] w-[300px] text-3xl font-bold"></Skeleton>
        </div>
        <Skeleton width="100%" height={2}></Skeleton>

        <div className=" pt-8">
          <Skeleton className="mb-3 h-[25px] w-[200px] text-3xl font-bold"></Skeleton>
          <Skeleton className="mb-3 h-[70px] w-[100%] text-3xl font-bold"></Skeleton>

          <div></div>
        </div>
        <Skeleton width="100%" height={2}></Skeleton>

        <div className="pt-8">
          <Skeleton className="mb-3 h-[25px] w-[200px] text-3xl font-bold"></Skeleton>
          <div className="flex flex-wrap">
            <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 h-[25px] w-[75px] text-3xl font-bold"></Skeleton>
            </div>
            <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 h-[25px] w-[75px] text-3xl font-bold"></Skeleton>
            </div>
            <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 h-[25px] w-[75px] text-3xl font-bold"></Skeleton>
            </div>
            <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 h-[25px] w-[75px] text-3xl font-bold"></Skeleton>
            </div>
            <div>
              <Skeleton className="mb-3 h-[35px] w-[100px] text-3xl font-bold"></Skeleton>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[430px] border border-solid border-white p-8 2sm:w-[40%] md:sticky md:right-0 md:top-36 xl:w-[35%] 2xl:mr-24 2xl:w-[30%] ">
        <Skeleton width="100%" height="100%"></Skeleton>
      </div>
    </div>
  );
}

export default InformationDetailLoading;
