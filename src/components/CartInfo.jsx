import { useContext } from "react";
import ShopContext from "../ShopContext";

function CartInfo() {
  const shopContext = useContext(ShopContext);

  const calcolaTotale = () => {
    let totale = 0;
    for (let prodotto of shopContext.productsInCart) {
      totale += prodotto.prezzo;
    }
    return totale;
  };
  return (
    <section>
      <h3>Carrello</h3>
      <section>
        {shopContext.productsInCart.map((product) => {
          //per mostrare elementi delloggetto shopContext

          return (
            //troncata parte decimale, usato random per non avere id uguali, passo una funzione anonima a onclick e passo come argomento direttamente l id che equivale a idProduct in app.jsx
            <div key={(Math.random() * 1e6) | 0}>
              {product.titolo} {product.prezzo}
              <button onClick={() => shopContext.handleDelete(product.id)}>
                Rimuovi elemento
              </button>
            </div>
          );
        })}
      </section>
      <h4>Totale: {calcolaTotale()} </h4>
    </section>
  );
}

export default CartInfo;
