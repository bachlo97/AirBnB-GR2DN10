import { Container } from '@/components/style-compoment/Container'

import InforWhereverList from './components/InforWhereverList'
import { useEffect, useState } from 'react';
import InforWhereverLoading from './loading/InforWhereverLoading';

function InforWherever() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <InforWhereverLoading/>
    }
  return (
    <Container>
        <div className='my-3'>
        <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'>Ở bất cứ đâu</h3>
      
         <InforWhereverList/>

         

    </div>  
    </Container>
  
  )
}

export default InforWherever
