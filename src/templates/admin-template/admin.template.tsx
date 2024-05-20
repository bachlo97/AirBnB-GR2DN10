import React, { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { CgPlayTrackNextO } from "react-icons/cg";
import { TeamOutlined, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Dropdown, Layout, Menu, Space, Spin, theme } from "antd";
import { useTransition, animated } from "@react-spring/web";
import { LogoIcon } from "@/assets/icons";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const AdminTemplate: React.FC = () => {
  const location = useLocation();
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
      label: <button onClick={() => {}}>Đăng xuất</button>,
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
                  <div className="space-x-2">
                    <i className="fa-regular fa-user rounded-full bg-slate-200 p-3"></i>
                    <span>{/* {user.taiKhoan} */}</span>
                  </div>
                  <DownOutlined />
                </Space>
              </span>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: "0 16px", overflow:'hidden' }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
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
  );
};

export default AdminTemplate;
