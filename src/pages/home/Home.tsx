import { Fragment } from "react";
import HomeProduct from "./product/product";
import Discover from "./discover/Discover";
import InforWherever from "./infor-Wherever/InforWherever";
import { Carousel } from "./carousel";
import { HorizontalScroll } from "./horizontal-scroll";
import { Provider } from "./context/filter-rooms.context";

function Home() {
  return (
    <Fragment>
      <Carousel />

      <Discover></Discover>
      <Provider>
        <HorizontalScroll />
        <HomeProduct />
      </Provider>

      <InforWherever />
    </Fragment>
  );
}

export default Home;
