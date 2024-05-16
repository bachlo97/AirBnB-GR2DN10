import React from "react";
import { Login } from "./login/login";
import { Register } from "./register";

type Props = {};

export default function Auth({}: Props) {
  return (
    <div
      className="flex h-[100vh] w-[100vw] items-center justify-center bg-cover bg-center bg-no-repeat after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:bg-[#00000026] after:content-[''] "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1549615567-101937a79124?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="relative flex max-w-[700px] content-center items-center rounded-2xl border-[2px] border-solid border-[rgba(255,255,255,0.5)] bg-transparent px-[3rem] py-[2rem] backdrop-blur-[10px]">
        {/* <Login/> */}
        <Register/>
      </div>
    </div>
  );
}
