import React, { useEffect } from "react";
import { Upload } from "./components/upload/upload";
import UserInfo from "./components/user-info/user-info";
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "@/utils";
import { ACCESS_TOKEN } from "@/constant";

type Props = {};

export default function Profile({}: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getLocalStorage(ACCESS_TOKEN)) {
    
      navigate("/auth/signin");
  }
  }, []);
  return (
    <div className="mx-auto my-10 grid w-[95%] grid-cols-4 gap-7">
      <div className="cols-span bg-white-300 flex flex-col items-center justify-center rounded-3xl border-[1px] border-solid border-gray-300">
        <Upload />
      </div>
      <div className="col-span-3">
        <UserInfo />
      </div>
    </div>
  );
 
}
