import { useState } from "react";
import ShopList from "./ShopList";
import CartInfo from "./CartInfo";
import Header from "./Header";
import ShopContext from "../ShopContext";

function App() {
  const [productsInCart, setProductsInCart] = useState([]); //inizialmente il carrello è vuoto
  const shopContextObj = {
    productsInCart: productsInCart, //passo come valore lo stato da modificare
    products: [
      { id: 1, titolo: "Prodotto 1 - €", prezzo: 3.25 },
      { id: 2, titolo: "Prodotto 2 - €", prezzo: 5.25 },
      { id: 3, titolo: "Prodotto 3 - €", prezzo: 7.25 },
    ],
    handleAddProductInCart: (product) => {
      //cambio lo stato di productincart con la callback per salvare il valore
      setProductsInCart((prevProductsInCart) => [
        ...prevProductsInCart,
        product,
      ]);
    },
    handleDelete: (idProduct) => {
      setProductsInCart((prevProductsInCart) =>
        prevProductsInCart.filter((product) => {
          return product.id !== idProduct;
        })
      );
    },
  };

  return (
    <ShopContext.Provider value={shopContextObj}>
      <Header />
      <main>
        <ShopList />
        <CartInfo />
      </main>
      <footer>&copy;Copyright</footer>
    </ShopContext.Provider>
  );
}

export default App;
