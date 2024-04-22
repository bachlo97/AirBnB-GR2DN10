import React from 'react'
import { HeaderLogo, HeaderLogoText } from '../header.style'
import { FaAirbnb, FaBars, FaUserCircle } from 'react-icons/fa'
import ToogleHeader from '../Toggle/ToogleHeader'
import { Button, Dropdown } from 'antd'
import { HeaderSearchIconSubmit, SearchBarNav } from './NavBar.style'
import { NavItem } from '../SearchBar/SearchBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Đăng nhập
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Đăng Kí
        </a>
      ),
    },
    
  ];
function Navbar(props) {
 
  

  
  return (
    <div className="flex justify-between items-center mb-3">
    <div className='logo flex items-center gap-3 text-[2.1rem]'>

<HeaderLogo>
<FaAirbnb />
</HeaderLogo>  
<HeaderLogoText>
AirBnB
</HeaderLogoText>

</div>
    {props.scrollY ?
    
    (  <NavItem  className='flex items-center 2xl:ml-[12rem] gap-5' id='navItem'>
    
    <div className='lg:text-[17px]'>Nơi ở</div>
    
    <div className='lg:text-[17px]'>Trải nghiệm</div>
    <div className='lg:text-[17px]'>Trải nghiệm trực tuyến</div>
    
    </NavItem>):(
        <NavItem>
                <SearchBarNav className='2xl:ml-[12rem]'>
            <div className="flex justify-between items-center px-8">
               <h5 className='text-[1.4rem]'>Địa điểm</h5>
                      <h5 className='text-[1.4rem]'>Thời gian</h5>
                      <h5 className='text-[1.4rem]'>Số Khách</h5> 
                    <HeaderSearchIconSubmit>
                        <div className='flex justify-center'>
                         <FaMagnifyingGlass />   
                        </div>
                    
                    </HeaderSearchIconSubmit>
            </div>
                      


        </SearchBarNav>
        </NavItem>
    

    )}
  
    <div className='flex items-center gap-5'>
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
trigger={['click']}
>
<Button 

className='flex gap-3 items-center h-[40px]' style={{borderRadius:'30px'}}

>
<FaBars />
<div className='text-[25px]'>
<FaUserCircle />
</div>



</Button>
</Dropdown>
</div>

</div>
  )
}

export default Navbar
