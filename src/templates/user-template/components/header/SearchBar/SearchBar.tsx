import { NavItem, SearchBar, SearchIcoin, SearchIconSubmi} from './SearchBar.style'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { DatePicker, Select, Space } from 'antd';
import './style.css'
import { useEffect, useState } from 'react';
import SearchBarLoading from './SearchBarLoading';
import { TLocaltion } from '@/services/localtion/Localtion.type';
import { IIFE } from '@/utils';
import { getLocaltion } from '@/services/localtion/Localtion.service';
import { converToLocations } from './helper/ConvertToLocations';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function HeaderSearchBar(props:any) {
  const [activeField, setActiveField] = useState(''); 
  const [dataLocations,setDataLocations]=useState<TLocaltion[]>([]);
  const handleFieldClick = (fieldName: string) => {
    setActiveField(fieldName); 
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000); 
  }, []);

  useEffect(()=>{
    IIFE(async ()=>{
      try{
        const data=await getLocaltion();  
        const content=data.content;
          setDataLocations(converToLocations(content));
      
      }catch(e){
          console.log({e});
          
        }
    })
  },[])

 
  const dataoption=dataLocations.map((item)=>{
    return {
      value: item.tenViTri, label: item.tenViTri+','+item.tinhThanh
    }
   
  
  })

  
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
     className='my-select w-[150px]'
     allowClear 
     
      // onChange={handleChange}
      options={dataoption}
      
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