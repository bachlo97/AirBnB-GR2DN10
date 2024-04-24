import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'


type Props = {}

const UserTemplate = (props: Props) => {
  return (
    <>
        
        <main>
            <Suspense fallback={<p className="text-red-400">Loading...</p>}>
                <Outlet/>
            </Suspense>
        </main>
    
    </>
  )
}

export default UserTemplate