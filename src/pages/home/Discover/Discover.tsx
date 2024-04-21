
import { Container } from '@/components/StyleCompoment/StyleCompoment';
import { DataDiscover } from './Data/DataDiscover';

function Discover() {
    const renderData=DataDiscover.map((item,index)=>{
        return (
            <div key={index} className='sm:w-[49%] 2sm:w-[32.5%] lg:w-[24%] xl:w-[19%] mt-3 relative'>
            <img style={{height:'150px',borderRadius:'3rem'}} src={item.img} alt={item.city} />
        <div className="text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
            <h4 className='text-3xl font-medium'>
                {item.city}
                </h4>
            <p className='text-2xl'>{item.time}</p>
        </div> 
        </div>
        )
    })
  return (
    <Container>
        <div className='my-3'>
      <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'>Khám phá những địa điểm gần đây</h3>
      <div className='flex flex-wrap gap-[1%]' >
       {renderData}

      
      
      </div>
   
     
    </div>  
    </Container>
  
  )
}

export default Discover
