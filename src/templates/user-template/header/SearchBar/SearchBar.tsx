import React from 'react'
import { NavItem, SearchBar, SearchIcoin, SearchIconSubmi, SearchItem } from './SearchBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'

function HeaderSearchBar(props) {
  return (
 
    <NavItem className='mb-5'>
        {props.scrollY ?(        <SearchBar >
     <div className='flex'>
        <SearchIcoin >
  
                      <h5 className='text-[1.4rem] mt-3'>Địa điểm</h5>
        <p className='text-[1.5rem] text-gray-500'>Tìm kiếm</p>

  
        </SearchIcoin>
        <SearchIcoin>
        <h5 className='text-[1.4rem] mt-3'>Ngày đến</h5>
        <p className='text-[1.5rem] text-gray-500'>21/12/2003</p>
        </SearchIcoin>
        <SearchIcoin>
        <h5 className='text-[1.4rem] mt-3'>Ngày về</h5>
        <p className='text-[1.5rem] text-gray-500'>21/12/2003</p>
        </SearchIcoin>
        <SearchIcoin >
        <h5 className='text-[1.4rem] mt-3'>Số khách </h5>
        <p className='text-[1.5rem] text-gray-500'>3</p>

        </SearchIcoin>
    
     </div> 
        <SearchIconSubmi>
    <div className='flex items-center justify-center'>
        <FaMagnifyingGlass />
    </div>
            


      
        </SearchIconSubmi>
    
    </SearchBar>): ``}

    
    </NavItem>
    
  )
}

export default HeaderSearchBar