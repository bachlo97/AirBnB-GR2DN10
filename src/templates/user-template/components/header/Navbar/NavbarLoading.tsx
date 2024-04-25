import React from 'react'
import { HeaderLogo, HeaderLogoText } from '../header.style'
import { FaAirbnb, FaBars, FaUserCircle } from 'react-icons/fa'
import { NavItem } from '../SearchBar/SearchBar.style'
import { HeaderSearchIconSubmit, SearchBarNav } from './NavBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import ToogleHeader from '../Toggle/ToogleHeader'
import { Button, Dropdown } from 'antd'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function NavbarLoading() {
  return (
    <div className="flex justify-between items-center mb-3">
    <div className='logo flex items-center gap-3 text-[2.1rem]'>

<HeaderLogo>
<Skeleton width={30} height={30}/>
</HeaderLogo>  
<HeaderLogoText>
<Skeleton width={60} height={30}/>
</HeaderLogoText>

</div>
    
<NavItem  className='flex items-center gap-5' id='navItem'>
    
    <div className='lg:text-[17px]'>

    <Skeleton width={50} height={30}/>
    </div>
    
    <Skeleton width={70} height={30}/>
    <Skeleton width={130} height={30}/>
    
    </NavItem>

    
  
    <div className='flex items-center gap-5'>

<Skeleton width={110} height={30}/>

<Skeleton width={90} height={30}/>

</div>

</div>
  )
}

export default NavbarLoading
