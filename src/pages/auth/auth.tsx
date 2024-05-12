import React from "react";
import { Login } from "./login/login";
import { Register } from "./register";
import { useParams } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
type Props = {};

export default function Auth({}: Props) {
  const { sign } = useParams();
  const transitions = useTransition(sign, {
    from: { transform: "scale(0.85)", display: "block" },
    enter: { transform: "scale(1)", display: "block" },
    leave: { transform: "scale(0)", display: "none" },
    config: { duration: 500 },
  });
  const renderForm = () => {
    switch (sign) {
      case "signin":
        return <Login />;
      case "signup":
        return <Register />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex h-[100vh] w-[100vw] items-center justify-center bg-cover bg-center bg-no-repeat after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-10 after:bg-[#00000026] after:content-[''] "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1549615567-101937a79124?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      {transitions((props) => {
        return (
          <animated.div style={props}>
            <div className="relative flex content-center items-center rounded-2xl border-[2px] border-solid border-[rgba(255,255,255,0.5)] bg-transparent px-[3rem] py-[2rem] backdrop-blur-[10px] mobile:max-w-[300px] ipad:max-w-[700px]">
              {renderForm()}
            </div>
          </animated.div>
        );
      })}
    </div>
  );
}
