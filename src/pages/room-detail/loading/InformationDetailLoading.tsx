import React from 'react'
import Skeleton from 'react-loading-skeleton'

function InformationDetailLoading() {
  return (
    <div className="mx-auto my-3 mt-8 2sm:flex lg:w-[100%] 2xl:w-3/4 justify-between relative">
    <div className="md:w-[50%] xl:w-[60%]">
      <Skeleton className="text-[2rem] font-bold h-[25px] w-[300px]">
  
      </Skeleton>
      <div className="flex gap-3 pt-4">
        <Skeleton width={50} height={25}></Skeleton>
        <Skeleton width={50} height={25}></Skeleton>
        <Skeleton width={50} height={25}></Skeleton>

      </div>
      <Skeleton width='100%' height={2}></Skeleton>
      <div className="py-4">
        <div className="mt-8 flex gap-3">
         <Skeleton width={35} height={35}></Skeleton>
          <div className="">
            <Skeleton className="font-bold w-[150px] h-[20px]"></Skeleton>
            <Skeleton className='w-[250px] h-[20px]'>
             
            </Skeleton>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
        <Skeleton width={35} height={35}></Skeleton>
          <div className="">
            <Skeleton className="font-bold w-[150px] h-[20px]"></Skeleton>
            <Skeleton className='w-[250px] h-[20px]'>
             
            </Skeleton>
          </div>
        </div>
        
        <div className="mt-8 flex gap-3">
          
        <Skeleton width={35} height={35}></Skeleton>
          <div className="">
            <Skeleton className="font-bold w-[150px] h-[20px]"></Skeleton>
            <Skeleton className='w-[250px] h-[20px'>
             
            </Skeleton>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          
        <Skeleton width={35} height={35}></Skeleton>
          <div className="">
            <Skeleton className="font-bold w-[150px] h-[20px]"></Skeleton>
            <Skeleton className='w-[250px] h-[20px]'>
             
            </Skeleton>
          </div>
        </div>
      </div>
      <Skeleton width='100%' height={2}></Skeleton>

      <div className=" pt-8">
      <Skeleton className="mb-3 text-3xl font-bold w-[300px] h-[25px]"></Skeleton>

      </div>
      <Skeleton width='100%' height={2}></Skeleton>

      <div className=" pt-8">
      <Skeleton className="mb-3 text-3xl font-bold w-[200px] h-[25px]"></Skeleton>
      <Skeleton className="mb-3 text-3xl font-bold w-[100%] h-[70px]"></Skeleton>
       
       
        <div>
     
        </div>
      </div>
      <Skeleton width='100%' height={2}></Skeleton>

      <div className="pt-8">
      <Skeleton className="mb-3 text-3xl font-bold w-[200px] h-[25px]"></Skeleton>
        <div className="flex flex-wrap"> 
          
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 text-3xl font-bold w-[75px] h-[25px]"></Skeleton>

           
      
          </div> 
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 text-3xl font-bold w-[75px] h-[25px]"></Skeleton>

           
      
          </div> 
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 text-3xl font-bold w-[75px] h-[25px]"></Skeleton>

           
      
          </div> 
              <div className="flex w-1/2 items-center gap-2 text-[2.1rem]">
              <Skeleton className="mb-3 text-3xl font-bold w-[75px] h-[25px]"></Skeleton>

           
      
          </div> 
          <div>
          <Skeleton className="mb-3 text-3xl font-bold w-[100px] h-[35px]"></Skeleton>

          </div>
       
        
        </div>
       
 

      </div>
    </div>

    <div
      className="2xl:mr-24 h-[430px] 2sm:w-[40%] xl:w-[35%] 2xl:w-[30%] border border-solid border-white p-8 md:sticky md:top-36 md:right-0 "
     
 >
   <Skeleton width='100%' height='100%'></Skeleton>
      
     
  
 

     
    </div>

  </div>
  )
}

export default InformationDetailLoading
