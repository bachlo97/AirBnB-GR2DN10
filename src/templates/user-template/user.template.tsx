import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


type Props = {}

const UserTemplate = (props: Props) => {
  return (
    <>
        <Header/>
        <main>
            <Suspense fallback={<p className="text-red-400">Loading...</p>}>
                <Outlet/>
            </Suspense>
        </main>
        <Footer/>
    
    </>
  )
}

export default UserTemplate