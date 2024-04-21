import Footer from '@/templates/user-template/footer/Footer'
import Header from '@/templates/user-template/header/Header'
import  { Fragment } from 'react'
import Discover from './Discover/Discover'
import InforWherever from './InforWherever/InforWherever'
import HomeProduct from './product/product'


function Home() {
  
  return (
    <Fragment>
      <Header></Header>
      <div className='border w-[100%] h-[100vh] bg-black'></div>
      
    <Discover></Discover>

    <HomeProduct></HomeProduct>
    <InforWherever/>

 <Footer/>
    </Fragment>
    
  )
}

export default Home
