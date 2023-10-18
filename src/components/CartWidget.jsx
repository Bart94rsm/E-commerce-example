import { useContext } from "react";
import ShopContext from "../ShopContext";
import Badge from "./Badge";
import cartIcon from "../assets/cart.svg";

function CartWidget() {
  const shopContext = useContext(ShopContext);
  return (
    <Badge icon={cartIcon} withNumber={shopContext.productsInCart.length} /> //.length cosi quando viene  modificato mostra numero reale
  ); //se voglio creare altre icone uso un ulteriore componente (badge) cosi è piu configurabile
}

export default CartWidget;
