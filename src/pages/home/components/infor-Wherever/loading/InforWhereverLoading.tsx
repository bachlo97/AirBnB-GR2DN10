import { DataWherever } from '../data/DataWherever'
import Skeleton from 'react-loading-skeleton'
import { Container } from '@/components/style-compoment/Container'

function InforWhereverLoading() {
    const DataItem=DataWherever.map((_,index)=>{
        return (
          <div className='sm:w-[100%] 2sm:w-[49%] lg:w-[24%] mt-3' key={index}>
          <Skeleton style={{height:'250px',borderRadius:'1rem',width:'100%'}}  />
          <div className="text">
          <h5 className='mt-3 font-bold text-[1.8rem]'><Skeleton width={200} height={20}/></h5>
          </div>
          </div>
        
        )
      })
  return (
    <Container>
         <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'><Skeleton width={250} height={30}/></h3>
          <div  className='flex flex-wrap justify-between'>
      {DataItem}
    </div>
    </Container>
  
  )
}

export default InforWhereverLoading
