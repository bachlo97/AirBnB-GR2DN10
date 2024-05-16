import React from 'react'

type Props = {}

export default function BookingInfo({}: Props) {
  return (
    <div className='flex flex-col gap-10'>
      <div>
      <div className='flex gap-7'>
        <img className='h-[180px] w-[35%] object-cover rounded-xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-1155375567549354059/original/ae13ed1e-c9b2-4489-9822-bc5ea63eeb6c.jpeg?im_w=1200" alt=""  />
        <p className='w-[65%]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus. Exercitationem veniam incidunt cumque enim illum repudiandae, suscipit architecto, aut quibusdam debitis sint minus eligendi quia dolore impedit. Placeat, reiciendis.</p>
      </div>
      <hr className='mt-8'/>
      </div>

      <div>
      <div className='flex gap-7 '>
        <img className='h-[180px] w-[35%] object-cover rounded-xl' src="https://a0.muscache.com/im/pictures/miso/Hosting-1155375567549354059/original/ae13ed1e-c9b2-4489-9822-bc5ea63eeb6c.jpeg?im_w=1200" alt=""  />
        <p className='w-[65%]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, accusamus. Exercitationem veniam incidunt cumque enim illum repudiandae, suscipit architecto, aut quibusdam debitis sint minus eligendi quia dolore impedit. Placeat, reiciendis.</p>
      </div>
      <hr className='mt-8' />
      </div>

    </div>
  )
}