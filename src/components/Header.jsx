import CartWidget from "./CartWidget";

function Header() {
  return (
    <header className="main-header">
      <section className="main-menu">
        <nav className="menu">
          <ul>
            <li>
              <a href="">Home </a>
            </li>
            <li>
              <a href="">Chi siamo</a>
            </li>
            <li>
              <a href="">Contatti</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="cart-widget">
        <CartWidget />
      </section>
    </header>
  );
}

export default Header;
