
import  { Fragment } from 'react'
import HomeProduct from './product/product'
import Discover from './discover/Discover'
import InforWherever from './inforWherever/InforWherever'


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
