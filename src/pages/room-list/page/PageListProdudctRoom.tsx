import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import '../css/PageListProduct.css'
import ListProductRoom from '../compoment/ListProductRoom';



export default function PaginatedItems({ itemsPerPage,data}:any) {

        console.log(data);
        
    const items = data;

    
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  console.log(currentItems)
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
   
    setItemOffset(newOffset);
  };

  return (
    <>
      <ListProductRoom data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName='activePage'
      />
    </>
  );
}