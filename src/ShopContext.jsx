import { createContext } from "react";
//contesto vuoto configurabile
const ShopContext = createContext({
  productsInCart: [],
  products: [],
  handleAddProductInCart: null,
  handleDelete: null,
});
export default ShopContext;
