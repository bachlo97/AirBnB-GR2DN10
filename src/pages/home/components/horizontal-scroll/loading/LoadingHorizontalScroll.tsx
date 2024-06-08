import Skeleton from 'react-loading-skeleton'

function LoadingHorizontalScroll() {
  return (
    <div className="container">
          <Skeleton className="relative h-[50px] m-[0_80px] flex items-center justify-center gap-10 transition duration-500 ease-in">
</Skeleton> 
    </div>
 
  )
}

export default LoadingHorizontalScroll
