import { useContext, useEffect, useState } from "react";
import { converToRooms } from "./helpers/ConverToRooms";
import ProductItem from "./productItem";
import ProductListLoading from "./loading/ProductListLoading";
import { getNumColumns } from "./helpers";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

import _ from "lodash";
import FilterPopup from "./components/filter-popup";
import { ContextStore } from "../../../context/filter-rooms.context";
function ProductList() {
  const [{ dataRooms }] = useContext(ContextStore);
  const [num, setNum] = useState(getNumColumns());
  const [list, setList] = useState(_.chunk(converToRooms(dataRooms), num));

  //DevCuong add
  useEffect(() => {
    setList(_.chunk(converToRooms(dataRooms), num));
    const handleReSize = () => {
      const newNum = getNumColumns();
      const dataRoom = converToRooms(dataRooms);
      setNum(newNum);
      setList(_.chunk(dataRoom, newNum));
    };
    window.addEventListener("resize", handleReSize);
    return () => {
      window.addEventListener("resize", handleReSize);
    };
  }, [num, dataRooms]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <ProductListLoading dataRooms={dataRooms} />;
  }

  const renderRow = ({ index, key, style }: any) => {
    const gridCol: { [key: number]: string } = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    };
    return (
      <div key={key} style={style} className={`grid ${gridCol[num]} gap-8`}>
        {list[index].map((item, index) => (
          <div className="mx-auto" key={index}>
            <ProductItem
              id={item.id}
              tenPhong={item.tenPhong}
              khach={item.khach}
              phongNgu={item.phongNgu}
              giuong={item.giuong}
              phongTam={item.phongTam}
              giaTien={item.giaTien}
              maViTri={item.maViTri}
              hinhAnh={item.hinhAnh}
            />
          </div>
        ))}
      </div>
    );
  };

  //DevCuong use react virtualize to optimize perfomance
  return (
    <>
      <FilterPopup />
      {list.length ? (
        <WindowScroller>
          {({ height, scrollTop }) => (
            <div>
              <AutoSizer disableHeight>
                {({ width }) => (
                  <List
                    autoHeight
                    height={height}
                    rowCount={list.length}
                    rowHeight={350}
                    rowRenderer={renderRow}
                    scrollTop={scrollTop}
                    width={width}
                  />
                )}
              </AutoSizer>
            </div>
          )}
        </WindowScroller>
      ) : null}
    </>
  );
}

export default ProductList;
