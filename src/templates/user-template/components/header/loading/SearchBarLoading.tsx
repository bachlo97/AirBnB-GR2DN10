
import Skeleton from 'react-loading-skeleton'
import { NavItem } from '../search-bar/SearchBar.style'

type Props={
    scrollY: number | string
}

function SearchBarLoading(props:Props) {
  return (
    <NavItem className='mb-5 w-[50%] mx-auto'>
      
<Skeleton width='100%' height={60} borderRadius='10rem' />



</NavItem>
  )
}

export default SearchBarLoading