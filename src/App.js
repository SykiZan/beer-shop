import { useState } from "react";
import BeerInfo from "./components/Beer/BeerInfo";
import BeerList from "./components/Beer/BeerList";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />;
      <BeerInfo />
      <BeerList />
    </CartProvider>
  );
}

export default App;
