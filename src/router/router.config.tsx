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
const UserManagement = lazy(() => import("@/pages/admin/user-management"));
const LocationManagement = lazy(
  () => import("@/pages/admin/location-management"),
);
const RoomManagement = lazy(() => import("@/pages/admin/room-management"));
const BookingManagement = lazy(
  () => import("@/pages/admin/booking-management"),
);
const CommentManagement = lazy(
  () => import("@/pages/admin/comment-management"),
);

export const PROFILE_PATH = "profile";
export const ROOM_DETAIL_PATH = "roomdetail";
export const ROOM_LIST_PATH = "roomlist";
export const PAY_PATH = "pay";
export const AUTH_PATH = "auth";

export const ADMIN_PATH = "admin";
export const DASHBOARD_PATH = "dashboard";
export const USER_MNG_PATH = "users";
export const LOCATIONS_MNG_PATH = "locations";
export const ROOMS_MNG_PATH = "rooms";
export const BOOKING_MNG_PATH = "booking";
export const COMMENTS_MNG_PATH = "comments";
export const TABLE_COMMENT_ID_PATH = "comments/listComment";

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
            path: PROFILE_PATH,
            element: <Profile />,
          },
          {
            path: `${ROOM_DETAIL_PATH}/:id`,
            element: <RoomDetail />,
          },
          {
            path: `${ROOM_LIST_PATH}/:location`,
            element: <RoomList />,
          },
          {
            path: PAY_PATH,
            element: <Pay />,
          },
        ],
      },
      {
        path: `${AUTH_PATH}/:sign`,
        element: <Auth />,
      },
      {
        path: ADMIN_PATH,
        element: <AdminTemplate />,
        children: [
          {
            path: DASHBOARD_PATH,
            element: <DashBoard />,
          },
          {
            path: USER_MNG_PATH,
            element: <UserManagement />,
          },
          {
            path: LOCATIONS_MNG_PATH,
            element: <LocationManagement />,
          },
          {
            path: ROOMS_MNG_PATH,
            element: <RoomManagement />,
          },
          {
            path: BOOKING_MNG_PATH,
            element: <BookingManagement />,
          },
          {
            path: COMMENTS_MNG_PATH,
            element: <CommentManagement />,
          },
          {
            path: `${TABLE_COMMENT_ID_PATH}/:idPhong`,
            element: <TableCommentId />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <>Page not found.</>,
  },
]);
