import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-context";

function CartButton(props) {
  const [cartBump, setCartBump] = useState(false);
  const btnClasses = `${classes.button} ${cartBump ? classes.bump : ""}`;

  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setCartBump(true);

    setTimeout(() => {
      setCartBump(false);
    }, 300);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Beer</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default CartButton;
