import { CheckIcon, VIcon } from "@/assets/icons";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

export function Upload({}: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
  console.log('pass',user.avatar)
  const inpRef = useRef<any>();

  const [urlImage, setUrlImage] = useState('');
  const truncateText=(text:string)=> {  
    if (text.length <= 18) {
      return text;
    } else {
      return text.substring(0, 16) + "...";
    }
  }

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(urlImage);
    };
  }, [urlImage]);
  return (
    <>
      <div
        className="mt-10 flex h-40 w-40 items-center justify-center rounded-full bg-pink-500 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: urlImage ? `url(${urlImage})` : "none" }}
      >
        {!urlImage ? (
          <h1 className="text-[35px] text-white">
            {user.name[0].toUpperCase()}
          </h1>
        ) : null}
      </div>
      <span className="mt-2 text-[14px] underline cursor-pointer" onClick={() => {
            inpRef.current.click();
          }}>Cập nhật ảnh</span>
           <input
          onChange={(event:any) => {
            setUrlImage(URL.createObjectURL(event.target.files[0]));
          }}
          ref={inpRef}
          className="hidden"
          type="file"
          accept="image/png, image/jpeg, image/gif"
        />
      <div className="mt-10 w-[85%] text-left">
        <CheckIcon />
      </div>
      <div className="mt-5 w-[85%] text-left font-semibold">
        <p className="">Xác minh danh tính</p>
      </div>
      <div className="mt-2 w-[85%] text-left text-[13px] text-gray-600">
        <p className="">
          Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
        </p>
      </div>
      <div className="mt-4 w-[85%] text-left text-[13px] font-semibold text-gray-600">
        <button className="rounded-xl border-[1px] border-solid border-gray-600 px-5 py-3">
          Nhận huy hiệu
        </button>
      </div>
      <div className="mt-10 w-[85%] text-left">
        <hr />
      </div>
      <div className="mt-10 w-[85%] text-left text-[19px] font-semibold">
        <h3 className="">{truncateText(user.name)} đã xác nhận</h3>
      </div>
      <div className="mb-16 mt-4 flex w-[85%] space-x-2 text-left text-[13px]">
        <VIcon />
        <span className="text-gray-600 ">Địa chỉ email</span>
      </div>
    </>
  );
}
