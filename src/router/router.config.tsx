import { ScrollToTop } from "@/components/scroll-to-top";
import { lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
const Auth = lazy(() => import("@/pages/auth"));
const Profile = lazy(() => import("@/pages/profile"));
const RoomDetail = lazy(() => import("@/pages/room-detail"));
const RoomList = lazy(() => import("@/pages/room-list"));

import UserTemplate from "@/templates/user-template/user.template";

import { createBrowserRouter } from "react-router-dom";
import Pay from "@/pages/pay/Pay";


export const router = createBrowserRouter([
  {
    element: <ScrollToTop />,
    children: [
        {
            element: <UserTemplate />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },

                {
                    path: "profile",
                    element: <Profile />,
                },
                {
                  path: 'roomdetail/:id',
                  element: <RoomDetail/>
                },
                {
                  path: 'roomlist/:location',
                  element: <RoomList/>,
                },
                {
                  path: 'pay',
                  element: <Pay/>,
                },
                {
                  path: 'auth/:sign',
                  element: <Auth/>,
                }
            ],
        },
    ],
},

{
    path: "*",
    element: <>Page not found.</>,
},
  ]);
  
