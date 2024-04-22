import { NavItem, SearchBar, SearchIcoin, SearchIconSubmi} from './SearchBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { DatePicker, Select, Space } from 'antd';
import './style.css'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props:any) {
  
  return (
 
    <NavItem className='mb-5'>
        {
  
        props.scrollY ?(        <SearchBar>
     <div className='flex'>
        <SearchIcoin className='search-icon'>
  
                      <h5 className='text-[1.4rem] ml-4 mt-3'>Địa điểm</h5>
        <p className='text-[1.5rem] text-gray-500'>
          
        <Select 
      placeholder="Địa điểm"
     className='my-select'
     allowClear 
      // onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
        </p>

  
        </SearchIcoin>
        <SearchIcoin className='search-icon'>
        <h5 className='text-[1.4rem] mt-3'>Ngày đến</h5>
        <p className='text-[1.5rem] text-gray-500'>
        <Space direction="vertical">
    <DatePicker  placeholder='Ngày tới'/>

  </Space>

        </p>
        </SearchIcoin>
        <SearchIcoin className='search-icon'>
        <h5 className='text-[1.4rem] mt-3'>Ngày về</h5>
        <p className='text-[1.5rem] text-gray-500'>
        <Space direction="vertical">
    <DatePicker  placeholder='Ngày về'/>

  </Space>

        </p>
        </SearchIcoin>
        <SearchIcoin className='search-icon'>
        <h5 className='text-[1.4rem] mt-3'>Số khách </h5>
        <p className='text-[1.5rem] text-gray-500'>3</p>

        </SearchIcoin>
    
     </div> 
        <SearchIconSubmi>
    <div className='flex items-center justify-center'>
        <FaMagnifyingGlass />
    </div>
            


      
        </SearchIconSubmi>
    
    </SearchBar>): ``
    
    }

    
    </NavItem>
    
  )
}

export default HeaderSearchBar