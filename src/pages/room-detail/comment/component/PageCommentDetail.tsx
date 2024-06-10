import {useState } from 'react';

import ReactPaginate from 'react-paginate';
import ListCommentDetail from './ListCommentDetail';
import '../../css/PageListProduct.css'




export default function PageCommentDetail({ itemsPerPage,data}:any) {

      
        
    const items = data;
    // .reverse()
    
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  console.log(currentItems)
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page  ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListCommentDetail listComemt={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName='activePage'
        className='page-product-list my-8'
      />
    </>
  );
}