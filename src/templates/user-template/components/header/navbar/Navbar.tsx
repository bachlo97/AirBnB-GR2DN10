





import { useEffect, useState, useTransition } from "react";
import { HeaderLogo, HeaderLogoText } from "../header.style";
import { FaAirbnb, FaBars, FaUserCircle } from "react-icons/fa";
import ToogleHeader from "../toggle/ToogleHeader";
import { Button, Dropdown } from "antd";
import { HeaderSearchIconSubmit, SearchBarNav } from "./NavBar.style";
import { NavItem } from "../search-bar/SearchBar.style";
import { FaMagnifyingGlass } from "react-icons/fa6";
import NavbarLoading from "../loading/NavbarLoading";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser } from "@/redux/auth/auth.slice";
import { removeLocalStorage } from "@/utils";
import { ACCESS_TOKEN, USER_ID } from "@/constant";
import { useTranslation } from "react-i18next";
type Props = object;

function Navbar(props: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);
 
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const navbarStyle = {
    opacity: scrollY ? 1: 0, // Control navbar opacity based on state
    transition: "opacity 0.3s ease-in-out", // Smooth transition
  };
  const handlelogout = () => {
    dispatch(setUser(null));
    removeLocalStorage(ACCESS_TOKEN);
    removeLocalStorage(USER_ID);
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: user ? (
        <NavLink to={"profile"}>Trang cá nhân</NavLink>
      ) : (
        <NavLink to={"auth/signin"}>Đăng nhập</NavLink>
      ),
    },
    {
      key: "2",
      label: user ? (
        <button onClick={handlelogout}>Đăng xuất</button>
      ) : (
        <NavLink to={"auth/signup"}>Đăng Kí</NavLink>
      ),
    },
    user?.role === "ADMIN"
      ? { key: "3", label: <NavLink to={"/admin"}>Quản trị</NavLink> }
      : null,
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Mô phỏng thời gian tải dữ liệu
  }, []);

  if (isLoading) {
    return <NavbarLoading />;
  }

  console.log(props.scrollY);
  
  return (
    <div className="mb-3 flex items-center justify-between">
      <NavLink to={"/"} className="logo flex items-center gap-3 text-[2.1rem]">
        <HeaderLogo>
          <FaAirbnb />
        </HeaderLogo>
        <HeaderLogoText>AirBnB</HeaderLogoText>
      </NavLink>
      {props.scrollY ? (
        <NavItem className="flex items-center gap-5" id="navItem">
          <div className="lg:text-[17px]">{t("header.stays")}</div>

          <div className="lg:text-[17px]">{t("header.experiences")}</div>
          <div className="lg:text-[17px]">{t("header.onlineExperiences")}</div>
        </NavItem>
      ) : (
        <NavItem>
          <SearchBarNav className="">
            <div className="flex items-center justify-between px-8">
              <h5 className="text-[1.4rem]">{t("header.anyWhere")}</h5>
              <h5 className="text-[1.4rem]">{t("header.anyWeek")}</h5>
              <h5 className="text-[1.4rem]">{t("header.addGuests")}</h5>
              <HeaderSearchIconSubmit>
                <div className="flex justify-center">
                  <FaMagnifyingGlass />
                </div>
              </HeaderSearchIconSubmit>
            </div>
          </SearchBarNav>
        </NavItem>
      )}

      <div className="flex items-center gap-5">
        {/* <div className='md:text-[15px] lg:text-[17px]'>Đón tiếp khách</div> */}
        {/* toggle */}

        <ToogleHeader></ToogleHeader>

{/* user */}
<Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
          trigger={["click"]}
        >
          <Button
            className="flex h-[40px] items-center gap-3"
            style={{ borderRadius: "30px" }}
          >
            <FaBars />
            <div className="text-[25px]">
              {user ? (
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${user.avatar ? "bg-cover bg-center bg-no-repeat" : "bg-[#F62682] text-[16px] text-white "} `}
                  style={{
                    backgroundImage: user.avatar
                      ? `url(${user.avatar})`
                      : "none",
                  }}
                >
                  {user.avatar === "" ? user.name[0].toUpperCase() : null}
                </div>
              ) : (
                <FaUserCircle />
              )}
            </div>
          </Button>
        </Dropdown>
</div>

</div>
  )
}

export default Navbar;
