import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'




const UserTemplate = () => {
  return (
    <>
        <Header/>
        <main>
            <Suspense>
                <Outlet/>
            </Suspense>
        </main>
        <Footer/>
    
    </>
  )
}

export default UserTemplate