import Footer from '@/templates/user-template/footer/Footer'
import Header from '@/templates/user-template/header/Header'
import  { Fragment } from 'react'
import Discover from './Discover/Discover'
import InforWherever from './InforWherever/InforWherever'


function Home() {
  
  return (
    <Fragment>
      <Header></Header>
      <div className='border w-[100%] h-[100vh] bg-black'></div>
    <Discover></Discover>
    <InforWherever/>
 <Footer/>
    </Fragment>
    
  )
}

export default Home
