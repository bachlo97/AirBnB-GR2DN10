import { NavItem, SearchBar, SearchIcoin, SearchIconSubmi} from './SearchBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { DatePicker, Select, Space } from 'antd';
import './style.css'
import { useEffect, useState } from 'react';
import SearchBarLoading from './SearchBarLoading';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props:any) {
  const [activeField, setActiveField] = useState(''); // Use a string to track active field

  const handleFieldClick = (fieldName: string) => {
    setActiveField(fieldName); // Update active field state on click
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); // Mô phỏng thời gian tải dữ liệu
  }, []);

  if (isLoading) {
    return <SearchBarLoading scrollY={props.scrollY}></SearchBarLoading>;
  }
  

  return (
 
    <NavItem className='mb-5'>
        {
  
        props.scrollY ?(        <SearchBar>
     <form className='flex'>
     
        <SearchIcoin className={`${activeField === 'location' ? 'active' : ''} search-icon`} onClick={()=>{
         handleFieldClick('location')
          
        }}>
    
                      <h5 className='text-[1.4rem] ml-4 mt-3'>Địa điểm</h5>
        <p className='text-[1.5rem] text-gray-500'>
          
        <Select 
      placeholder="Địa điểm"
     className='my-select'
     allowClear 
      // onChange={handleChange}
      options={[
        { value: 'jack', label: ';pre,,,,,,,,,,,' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
        </p>

  
        </SearchIcoin>
        <SearchIcoin className={`${activeField === 'ngayden' ? 'active' : ''} search-icon`} onClick={()=>{
          handleFieldClick('ngayden')
          
        }}>
        <h5 className='text-[1.4rem] mt-3'>Ngày đến</h5>
        <p className='text-[1.5rem] text-gray-500'>
        <Space direction="vertical">
    <DatePicker  placeholder='Ngày tới'/>

  </Space>

        </p>
        </SearchIcoin>
        <SearchIcoin className={`${activeField === 'ngayVe' ? 'active' : ''} search-icon`} onClick={()=>{
          handleFieldClick('ngayVe')
          
        }}>
        <h5 className='text-[1.4rem] mt-3'>Ngày về</h5>
        <p className='text-[1.5rem] text-gray-500'>
        <Space direction="vertical">
    <DatePicker  placeholder='Ngày về'/>

  </Space>

        </p>
        </SearchIcoin>
        <SearchIcoin className={`${activeField === 'soKhach' ? 'active' : ''} search-icon`} onClick={()=>{
          handleFieldClick('soKhach')
          
        }}>
        <h5 className='text-[1.4rem] mt-3'>Số khách </h5>
        <p className='text-[1.5rem] text-gray-500'>


          <input type="number" placeholder='Số Khách' style={{width:'100%'}} className='outline-none' />
        </p>

        </SearchIcoin>
            <SearchIconSubmi>
          <div className='flex items-center justify-center'>
  <button type='submit' >
        <FaMagnifyingGlass />
    </button>
          </div>
  
            


      
        </SearchIconSubmi>
     </form> 

    
    </SearchBar>): ``
    
    }

    
    </NavItem>
    
  )
}

export default HeaderSearchBar