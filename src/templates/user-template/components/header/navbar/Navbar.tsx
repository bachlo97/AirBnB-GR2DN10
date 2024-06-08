





import { useEffect, useState, useTransition } from "react";
import { HeaderLogo, HeaderLogoText } from "../header.style";
import { FaAirbnb, FaBars, FaUserCircle } from "react-icons/fa";
import ToogleHeader from "../toggle/ToogleHeader";
import { Button, Dropdown } from "antd";
import { FaRegHeart } from "react-icons/fa";

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
import { animated } from "@react-spring/web";
import { IoMdSearch } from "react-icons/io";
import ModalHeader from "./modal/ModalHeader";
import { useScrollToTop } from "@/hooks/scroll-to-top.hook";
type Props = object;

function Navbar(props: Props) {
  const user: any = useAppSelector((state) => state.authReducer.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
 
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
      ? { key: "3", label: <NavLink to={"/admin/dashboard"}>Quản trị</NavLink> }
      : null,
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Mô phỏng thời gian tải dữ liệu
  }, []);

  if (isLoading) {
    return <NavbarLoading />;
  }

  const navbarStyle = {
    opacity: scrollY ? 0: 1, // Control navbar opacity based on state
    transition: "opacity 0.3s ease-in-out", // Smooth transition
  };
  const navbarStyle2 = {
    opacity: scrollY ? 1: 0, // Control navbar opacity based on state
    transition: "opacity 0.3s ease-in-out", // Smooth transition
  };
  
  return (
    <div>
          <div className="mb-3 relative flex items-center justify-between">

<NavLink to={"/"} className="logo flex items-center gap-3 text-[2.1rem]">
  <HeaderLogo>
    <FaAirbnb />
  </HeaderLogo>
  <HeaderLogoText>AirBnB</HeaderLogoText>
</NavLink>

{props.scrollY
 ? (
  <animated.div style={navbarStyle}>

       <NavItem className="flex items-center gap-5" id="navItem">
    <div className="lg:text-[17px]">{t("header.stays")}</div>

    <div className="lg:text-[17px]">{t("header.experiences")}</div>
    <div className="lg:text-[17px]">{t("header.onlineExperiences")}</div>
  </NavItem>
  
 
  </animated.div>

) : (
  <animated.div style={navbarStyle2}>
<NavItem>
  <button onClick={()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });

  }}>
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
  </button>
 
  </NavItem>
  </animated.div>

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

      <div className="fixed bg-white w-[100%] bottom-0 left-0 h-[65px] md:hidden">
        <div className="w-[80%] m-auto">
          <div className="flex gap-5 justify-center  mt-3">
        
<ModalHeader/>
                 <div className="flex flex-col justify-center items-center"
      
            >
              
              <FaRegHeart className="text-[2.3rem]"/>
              <div className="text-[1.5rem]">Yêu thích</div>
</div> 
          </div>
      
    
        </div>
      
      </div>
    </div>

  )
}

export default Navbar;
