import { Fragment } from "react";
import HomeProduct from "./components/product/product";
import Discover from "./components/discover/Discover";
import InforWherever from "./components/infor-Wherever/InforWherever";
import { Carousel } from "./components/carousel";
import { HorizontalScroll } from "./components/horizontal-scroll";
import { Provider } from "./context/filter-rooms.context";
import ScrollToTopButton from "@/components/button-to-top/ButtonToTop";

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
