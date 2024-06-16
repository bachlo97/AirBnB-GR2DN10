
import { DataWherever } from '../data/DataWherever'

function InforWhereverList() {
  
    const DataItem=DataWherever.map((item,index)=>{
        return (
          <div className='sm:w-[100%] 2sm:w-[49%] lg:w-[24%] mt-3 hover:transition-all hover:skew-x-3 cursor-pointer' key={index}>
          <img style={{height:'250px',borderRadius:'1rem'}} src={item.img} alt={item.title} />
          <div className="text">
          <h5 className='mt-3 font-bold text-[1.8rem]'>{item.title}</h5>
          </div>
          </div>
        
        )
      })
  return (
    <div  className='flex flex-wrap justify-between'>
      {DataItem}
    </div>
  )
}

export default InforWhereverList
