import React from "react";
import {Upload } from "./components/upload/upload";
import UserInfo from "./components/user-info/user-info";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="grid grid-cols-4 gap-7 mx-auto w-[95%] my-10">
      <div className="cols-span justify-center rounded-3xl bg-white-300 flex flex-col items-center border-gray-300 border-solid border-[1px]">
        <Upload />
      </div>
      <div className="col-span-3">
        <UserInfo />
      </div>
    </div>
  );
}
