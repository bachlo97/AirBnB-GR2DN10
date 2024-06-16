
import { useEffect, useState } from 'react';
import { TLocaltion } from '@/services/localtion/Localtion.type';
import { IIFE } from '@/utils';
import { getLocaltionsPage } from '@/services/localtion/LocationsPage';
import { converToLocationsPages } from './helpers/ConverToDiscover';
import DiscoverLoading from './loading/DiscoverLoading';
import { Container } from '@/components/style-compoment/Container';
import ListDiscover from './component/ListDiscover';
import { useTranslation } from 'react-i18next';

function Discover() {
  const {t} = useTranslation()
  const [dataLocations,setDataLocations]=useState<TLocaltion[]>([])
  useEffect(()=>{
    IIFE(async()=>{
      try{
        const data=await getLocaltionsPage();
        const content=data.content.data;
        setDataLocations(converToLocationsPages(content))
      }catch(e){
        console.log({e});
        
      }
    })
  },[])
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1000);
    }, []);
  
    if (isLoading) {
      return <DiscoverLoading dataLocations={dataLocations}/>
      }
    
  return (
    <Container>
        <div className='my-3'>
      <h3 className='font-bold sm:text-[1.8rem] 2sm:text-[2.2rem]'>{t("place.nearBy")}</h3>
      
     <ListDiscover dataLocations={dataLocations}/>
   {/* {renderData} */}
      
  
   
     
    </div>  
    </Container>
  
  )
}

export default Discover
