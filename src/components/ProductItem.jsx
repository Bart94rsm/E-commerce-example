import { useContext } from "react";
import ShopContext from "../ShopContext";

function ProductItem({ info }) {
  const { id, titolo, prezzo } = info;
  const shopContext = useContext(ShopContext);
  const handleAddProduct = () =>
    shopContext.handleAddProductInCart({
      ...info,
      qnt: "1",
    }); //passo informazioni del prodotto da aggiungere al carrello

  return (
    <div className="product-item">
      <div>{titolo}</div>
      <div>{prezzo}</div>
      <div>
        <button onClick={handleAddProduct}>Aggiungi</button>
      </div>
    </div>
  );
}

export default ProductItem;
