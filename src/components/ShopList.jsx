import ProductItem from "./ProductItem";
import { useContext } from "react";
import ShopContext from "../ShopContext";

//salvo contesto in una costante per usarlo, aggiungo riferimento quando uso le proprieta dell oggetto (vedi sotto)

function ShopList() {
  const shopContext = useContext(ShopContext);
  return (
    <section className="shop-list">
      {shopContext.products.map((product) => (
        <ProductItem key={product.id} info={product} />
      ))}
    </section>
  );
}

export default ShopList;
