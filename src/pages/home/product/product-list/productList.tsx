import { Fragment, useEffect, useState } from "react";
import { TRoom } from "@/services/room/Room.type";
import { IIFE } from "@/utils";
import { getRooms } from "@/services/room/Room.service";
import { converToRooms } from "./helpers/ConverToRooms";
import ProductItem from "./productItem";
import { Container } from "@/components/style-compoment/Container";
import ProductListLoading from "./loading/ProductListLoading";
import { getNumColumns} from "./helpers";
import { AutoSizer, List, WindowScroller } from "react-virtualized";

import _ from "lodash";
import { Modal } from "antd";
import FilterPopup from "./components/filter-popup";
function ProductList() {
  const [dataRooms, setDataRooms] = useState<TRoom[]>([]);
  const [num, setNum] = useState(getNumColumns());
  const [list, setList] = useState(_.chunk(dataRooms, num));
  useEffect(() => {
    IIFE(async () => {
      try {
        const data = await getRooms();
        const content = data.content;
        setDataRooms(converToRooms(content));
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  //DevCuong add
  useEffect(() => {
    setList(_.chunk(dataRooms, num));
    const handleReSize = () => {
      const newNum = getNumColumns();
      setNum(newNum);
      setList(_.chunk(dataRooms, newNum));
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
    return (
      <Container>
        <ProductListLoading dataRooms={dataRooms} />;
      </Container>
    );
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
        {list[index].map((item) => (
          <div className="mx-auto">
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
    <Container>
      <FilterPopup/>
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
    </Container>
  );
}

export default ProductList;
