
import  { Fragment } from 'react'
import Discover from './Discover/Discover'
import InforWherever from './InforWherever/InforWherever'
import HomeProduct from './product/product'


function Home() {
  
  return (
    <Fragment>
     
      <div className='border w-[100%] h-[100vh] bg-black'></div>
      
    <Discover></Discover>

    <HomeProduct></HomeProduct>
    <InforWherever/>

 
    </Fragment>
    
  )
}

export default Home
