import { ButtonPrimary } from '@/components/Button/Button'
import { Breadcrumb } from 'antd'

import TableComment from './component/TableComment'



export default function CommentManagement(props:any) {

  return (
    <div>
<Breadcrumb
    items={[
      {
        title: 'Admin',
      },
   
      {
        title: 'Quản lý bình luận',
      },
    ]}
  />
   <h3 className='text-center text-[1.9rem] font-medium'>Quản lý bình luận</h3>
   <div className="flex justify-between items-center">
   


   </div>
 
<TableComment/>
   
     </div>  
  )

  
}