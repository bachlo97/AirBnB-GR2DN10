import { Container } from "@/components/StyleCompoment/StyleCompoment"
import ProductList from "./productList/productList"
import ProductIcon from "./productIcon/ProductIcon"


function HomeProduct() {
  return (
    <Container>
    <ProductIcon/>
      <ProductList />
    </Container>
  )
}

export default HomeProduct
