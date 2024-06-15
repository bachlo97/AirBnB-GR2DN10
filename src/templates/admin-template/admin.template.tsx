import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaRegCommentDots, FaUserCircle } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Dropdown, Layout, Menu, Space, theme } from "antd";
import { useTransition, animated } from "@react-spring/web";
import { LogoIcon } from "@/assets/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getDashBoardInfoThunk } from "@/redux/admin/dashboard/dashboard.slice";
import { getProfileThunk, setUser } from "@/redux/auth/auth.slice";
import { getLocalStorage, removeLocalStorage, truncateText } from "@/utils";
import { ACCESS_TOKEN, USER_ID } from "@/constant";
import { getRoomThunk } from "@/redux/room/Room.slice";

const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate: React.FC = () => {
  const location = useLocation();
  console.log({ location });
  const [dashBoardState, setDashBoardState] = useState(false);
  const dispatch = useAppDispatch();
  const { user }: any = useAppSelector((state) => state.authReducer);

  const handlelogout = () => {
    dispatch(setUser(null));
    removeLocalStorage(ACCESS_TOKEN);
    removeLocalStorage(USER_ID);
    navigate("/");
  };

  useEffect(() => {
    if (!getLocalStorage(ACCESS_TOKEN) || (user && user.role !== "ADMIN")) {
      alert("Bạn không có quyền truy cập vào trang này");
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(getProfileThunk(getLocalStorage(USER_ID)));
    dispatch(getRoomThunk(""));
  }, []);

  useEffect(() => {
    if (location.pathname === "/admin/dashboard") {
      console.log(123456123);
      setDashBoardState(true);
    } else {
      setDashBoardState(false);
    }
  }, [location]);
  useEffect(() => {
    dispatch(getDashBoardInfoThunk());
  }, [dashBoardState]);

  const navigate = useNavigate();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translate3d(100vw, 0, 0)",
      display: "block",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)", display: "block" },
    leave: {
      opacity: 0,
      transform: "translate3d(-20vw, 0, 0)",
      display: "none",
    },
    config: { duration: 1000 },
  });

  const dropDownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <NavLink to="/">Quay lại trang chủ</NavLink>,
    },
    {
      key: "2",
      danger: true,
      label: <button onClick={handlelogout}>Đăng xuất</button>,
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (user && user.role == "ADMIN")
    return (
      <div className="desktop:w-full mobile:w-[1200px] mobile:overflow-x-auto">
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={235}
          >
            <div className="flex justify-center gap-2 py-8 text-[20px] text-[#ffa4a4]">
              <LogoIcon width={30} height={30} fill="#ffa4a4" />
              {collapsed ? "" : <span className="self-center">Airbnb</span>}
            </div>

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <TbDeviceAnalytics className="h-[20px] w-[20px]" />,
                  label: "DashBoard",
                  onClick: () => {
                    navigate("/admin/dashboard");
                  },
                },

                {
                  key: "2",
                  icon: <FaUserGroup className="h-[20px] w-[20px]" />,
                  label: "Quản lý người dùng",
                  onClick: () => {
                    navigate("/admin/users");
                  },
                },
                {
                  key: "3",
                  icon: <CiLocationOn className="h-[20px] w-[20px]" />,
                  label: "Quản lý thông tin vị trí",
                  onClick: () => {
                    navigate("/admin/locations");
                  },
                },
                {
                  key: "4",
                  icon: <MdOutlineMeetingRoom className="h-[20px] w-[20px]" />,
                  label: "Quản lý thông tin phòng",
                  onClick: () => {
                    navigate("/admin/rooms");
                  },
                },
                {
                  key: "5",
                  icon: <TbBrandBooking className="h-[20px] w-[20px]" />,
                  label: "Quản lý đặt phòng",
                  onClick: () => {
                    navigate("/admin/booking");
                  },
                },
                {
                  key: "6",
                  icon: <FaRegCommentDots className="h-[20px] w-[20px]" />,
                  label: "Quản lý bình luận",
                  onClick: () => {
                    navigate("/admin/comments");
                  },
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <div className="pr-10 pt-1 text-right">
                <Dropdown menu={{ items: dropDownItems }}>
                  <span>
                    <Space>
                      <div className="flex items-center justify-center gap-2 space-x-2">
                        <span>
                          {" "}
                          Xin chào, {user && truncateText(user.name, 20)}
                        </span>
                        {user ? (
                          <div
                            className={`h-16 w-16 rounded-full ${user.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                            style={{
                              backgroundImage: user.avatar
                                ? `url(${user.avatar})`
                                : "none",
                            }}
                          >
                            {user.avatar === ""
                              ? user.name[0].toUpperCase()
                              : null}
                          </div>
                        ) : (
                          <FaUserCircle />
                        )}
                      </div>
                      <DownOutlined />
                    </Space>
                  </span>
                </Dropdown>
              </div>
            </Header>
            <Content style={{ margin: "0 16px", overflow: "hidden" }}>
              <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {transitions((props) => {
                  return (
                    <Suspense>
                      <animated.div style={props}>
                        <Outlet />
                      </animated.div>
                    </Suspense>
                  );
                })}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              AirBnB ©{new Date().getFullYear()} Created by DN10-GR2
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
};

export default AdminTemplate;
