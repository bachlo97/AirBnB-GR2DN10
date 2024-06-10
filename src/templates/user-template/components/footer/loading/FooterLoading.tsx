import { Container } from '@/components/style-compoment/Container'
import { FooterTop, FooterWeb } from '../footer.style'
import Skeleton from 'react-loading-skeleton'

function FooterLoading() {
  return (
    <FooterWeb>
       <FooterTop>  <Container>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[10px]'>
            <div className='box'>
                <h3 className='text-[2rem] mb-5'>
                    <Skeleton width={70} height={30}/>
                </h3>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
                   
                <Skeleton width={250} height={20}/>

                </p>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
                  
                <Skeleton width={250} height={20}/>

                </p>
               
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
          
                <Skeleton width={250} height={20}/>

                </p>
                <p className='flex gap-1 items-center' style={{lineHeight:'3rem'}}>
               


       
                <Skeleton width={250} height={20}/>


                </p>
                <div className='flex gap-3 '>
                <Skeleton width={150} height={35}/>
                <Skeleton width={150} height={35}/>
                </div>
              

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3'> <Skeleton width={200} height={20}/></h4>
                <p style={{lineHeight:'3rem'}}>
          
                 
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
          
      
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
          
        
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
      
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
          
        
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
          
       
                <Skeleton width={250} height={20}/>

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3' > <Skeleton width={200} height={20}/></h4>
                <p style={{lineHeight:'3rem'}}>
                    
              
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
              
                <Skeleton width={250} height={20}/>
                </p>
                <p style={{lineHeight:'3rem'}}>
                    
     
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
          
                <Skeleton width={250} height={20}/>
                </p>
                <p style={{lineHeight:'3rem'}}>
                    
                
                <Skeleton width={250} height={20}/>

                </p>
                <p style={{lineHeight:'3rem'}}>
                    
          
                <Skeleton width={250} height={20}/>

                </p>
               

            </div>
            <div className='box'>
                <h4 className='text-[1.8rem] mb-3'> <Skeleton width={200} height={20}/></h4>
    <p style={{lineHeight:'3rem'}}>
                <Skeleton width={300} height={20}/></p>
            <form action="">
            <Skeleton width={280} height={30}/>
            </form>
               <h4 style={{lineHeight:'3rem'}}>
                <Skeleton width={250} height={20}/></h4>
          <div className="socials flex gap-3">
          <Skeleton width={35} height={35} borderRadius='50%'/>
          <Skeleton width={35} height={35} borderRadius='50%'/>
          <Skeleton width={35} height={35} borderRadius='50%'/>


          </div>
            </div>
        </div>

      </Container>
</FooterTop>
    
    </FooterWeb>
  )
}

export default FooterLoading
