import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useAppDispatch } from '@/redux/hooks'
import { getProfileThunk } from '@/redux/auth/auth.slice'
import { getLocalStorage } from '@/utils'
import { USER_ID } from '@/constant'
import ScrollToTopButton from '@/components/button-to-top/ButtonToTop'




export default function UserTemplate(){
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getProfileThunk(getLocalStorage(USER_ID)))
  },[])
  return (
    <>
        <Header/>
        <main>
            <Suspense>
                <Outlet/>
                <ScrollToTopButton />
            </Suspense>
            
        </main>
        <Footer/>
    
    </>
  )
}
