import React, { useContext } from "react";
import classes from "./BeerItem.module.css";
import BeerForm from "./BeerForm";
import CartContext from "../../store/cart-context";

function BeerItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes["beer-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <BeerForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
}

export default BeerItem;
