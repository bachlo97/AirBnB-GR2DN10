
import Skeleton from 'react-loading-skeleton'
import { NavItem } from '../search-bar/SearchBar.style'


function SearchBarLoading() {
  return (
    <NavItem className='mb-5 w-[50%] mx-auto'>
      
<Skeleton width='100%' height={60} borderRadius='10rem' />



</NavItem>
  )
}

export default SearchBarLoading