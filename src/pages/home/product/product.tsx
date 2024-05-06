
import { Container } from "@/components/style-compoment/Container"
import ProductIcon from "./product-icon/ProductIcon"
import ProductList from "./product-list/productList"


function HomeProduct() {
  return (
    <Container>
    <ProductIcon/>
      <ProductList />
    </Container>
  )
}

export default HomeProduct
