import { Container } from '@/components/style-compoment/Container'
import Skeleton from 'react-loading-skeleton'
import DiscoverItemLoading from './DiscoverItemLoading'
import { TLocaltion } from '@/services/localtion/Localtion.type'

function DiscoverLoading(props:any) {
  return (
    <Container>
    <div className='my-3'>
  <Skeleton width={350} height={30} className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'></Skeleton>
  
  <div className='flex flex-wrap gap-[1%]'>
      {props.dataLocations.map((_:TLocaltion,index:string)=>{
        return (
            <div key={index} className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative'>
    <DiscoverItemLoading
                     />
        </div>
        )
    })}
    </div>
  


 
</div>  
</Container>
  )
}

export default DiscoverLoading
