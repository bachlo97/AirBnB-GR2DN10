import { Container } from '@/components/StyleCompoment/StyleCompoment'



import { HeaderWeb } from './header.style';

import Navbar from './Navbar/Navbar';
import HeaderSearchBar from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';

function Header() {
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
    <HeaderWeb className='py-5'>
        <Container>

        <Navbar scrollY={scrollY}/>
      
        <HeaderSearchBar scrollY={scrollY}></HeaderSearchBar>
       
    </Container>  
    <hr />
    </HeaderWeb>
   
  )
}

export default Header