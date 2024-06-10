


import { Container } from '@/components/style-compoment/Container';
import { HeaderWeb } from './header.style';

import Navbar from './navbar/Navbar';
import HeaderSearchBar from './search-bar/SearchBar';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';


function Header() {
    const user = useAppSelector(state=>state.authReducer.user)
    console.log({user})
    const [scrollY,setScrollY]=useState(true);

useEffect(()=>{
    const handleScroll = () => {
if(window.scrollY>0){
    setScrollY(false)
} else{
    setScrollY(true)
}
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll); // Cleanup

},[])
    

    
  return (

    <HeaderWeb className='py-5' >   

        <Container>
 
        <Navbar scrollY={scrollY} />
      
        <HeaderSearchBar scrollY={scrollY}></HeaderSearchBar>
       
    </Container>  
    <hr />
    </HeaderWeb>
   
  )
}

export default Header
