import React from 'react'
import Skeleton from 'react-loading-skeleton'

function DiscoverItemLoading() {
  return (
    <div>
    <Skeleton style={{height:'150px',borderRadius:'3rem'}} />
<div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
    <Skeleton className='text-3xl font-medium'>
       
        </Skeleton>
    <Skeleton className='text-2xl'></Skeleton>
</div> 
</div>
  )
}

export default DiscoverItemLoading
