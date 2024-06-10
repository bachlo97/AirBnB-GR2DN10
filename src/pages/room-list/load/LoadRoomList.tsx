/* eslint-disable @typescript-eslint/no-explicit-any */

import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

import { SMap, SMapRespon, SRespon } from "../RoomList.style";

import LoadListRoom from "./LoadListRoom";
import { Container } from "@/components/style-compoment/Container";

function LoadRoomList(props: { data: any[] }) {
  return (
    <Fragment>
      <Container>
        <SMapRespon>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15672.855867132948!2d106.59377735!3d10.8713242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1713872185758!5m2!1sen!2s"
            width="100%"
            height="300px"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </SMapRespon>
        <div className="bg-white sm:mt-[21rem] 2sm:mt-0 2sm:flex">
          <div className="lg:w-3/5 xl:w-3/5">
            <SRespon className="">
              <Skeleton className="h-[20px] w-[200px] text-xl text-gray-600"></Skeleton>
              <Skeleton className="mt-3 h-[30px] w-[400px] text-[2.5rem] font-semibold"></Skeleton>
              <div className="my-4 flex gap-5">
                <Skeleton className="h-[35px] w-[100px] rounded-[1.5rem] text-[1.3rem]"></Skeleton>
                <Skeleton className="h-[35px] w-[100px] rounded-[1.5rem] text-[1.3rem]"></Skeleton>
                <Skeleton className="h-[35px] w-[100px] rounded-[1.5rem] text-[1.3rem]"></Skeleton>
                <Skeleton className="h-[35px] w-[100px] rounded-[1.5rem] text-[1.3rem]"></Skeleton>
                <Skeleton className="h-[35px] w-[100px] rounded-[1.5rem] text-[1.3rem]"></Skeleton>
              </div>
            </SRespon>
            <div>
              <LoadListRoom data={props.data}></LoadListRoom>
            </div>
          </div>
          <SMap className="lg:w-3/5 xl:w-2/5">
            <Skeleton width="100%" height="100%"></Skeleton> {/*  */}
          </SMap>
        </div>
      </Container>
    </Fragment>
  );
}

export default LoadRoomList;
