
import  { Fragment } from 'react'
import HomeProduct from './product/product'
import Discover from './discover/Discover'
import InforWherever from './infor-Wherever/InforWherever'
import { Carousel } from './carousel'
import { HorizontalScroll } from './horizontal-scroll'



function Home() {
 
  return (
    <Fragment>
    
    <Carousel/>
      
    <Discover></Discover>
    <HorizontalScroll/>
    <HomeProduct></HomeProduct>
    <InforWherever/>
 
    </Fragment>
    
  )
}

export default Home
