import { ScrollToTop } from "@/components/scroll-to-top";
import { lazy } from "react";
const Home = lazy(() => import("@/pages/home"));
import Auth from "@/pages/auth";
const Profile = lazy(() => import("@/pages/profile"));
const RoomDetail = lazy(() => import("@/pages/room-detail"));
const RoomList = lazy(() => import("@/pages/room-list"));

import UserTemplate from "@/templates/user-template/user.template";

import { createBrowserRouter } from "react-router-dom";
import Pay from "@/pages/pay/Pay";
import AdminTemplate from "@/templates/admin-template/admin.template";
import TableCommentId from "@/pages/admin/comment-management/component/TableCommentId";
const DashBoard = lazy(() => import("@/pages/admin/dashboard"));
// import DashBoard from "@/pages/admin/dashboard/dashboard";
const UserManagement = lazy(() => import("@/pages/admin/user-management"));
// import UserManagement from "@/pages/admin/user-management/user-management";
const LocationManagement = lazy(() => import("@/pages/admin/location-management"));
// import LocationManagement from "@/pages/admin/location-management/location-management";
const RoomManagement = lazy(() => import("@/pages/admin/room-management"));
// import RoomManagement from "@/pages/admin/room-management/room-management";
const BookingManagement = lazy(() => import("@/pages/admin/booking-management"));
// import BookingManagement from "@/pages/admin/booking-management/booking-management";
const CommentManagement = lazy(() => import("@/pages/admin/comment-management"));
// import CommentManagement from "@/pages/admin/comment-management/comment-management";

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
            path: "roomdetail/:id",
            element: <RoomDetail />,
          },
          {
            path: "roomlist/:location",
            element: <RoomList />,
          },
          {
            path: "pay",
            element: <Pay />,
          },
        ],
      },
      {
        path: "auth/:sign",
        element: <Auth />,
      },
      {
        path: "admin",
        element: <AdminTemplate />,
        children: [
          {
            path: "dashboard",
            element: <DashBoard />,
          },
          {
            path: "users",
            element: <UserManagement />,
          },
          {
            path: "locations",
            element: <LocationManagement />,
          },
          {
            path: "rooms",
            element: <RoomManagement />,
          },
          {
            path: "booking",
            element: <BookingManagement />,
          },
          {
            path: "comments",
            element: <CommentManagement/>,
          },
          {
            path: "comments/listComment/:id",
            element: <TableCommentId/>,
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
