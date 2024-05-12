import React from "react";
import { Upload } from "./components/upload/upload";
import UserInfo from "./components/user-info/user-info";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="grid grid-cols-4">
      <div className="cols-span">
        <Upload />
      </div>
      <div className="col-span-3">
        <UserInfo />
      </div>
    </div>
  );
}
