import React from "react";
import beer from "../../assets/beer.jpg";

import CartButton from "./CartButton";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Beer Shop</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["beer-image"]}>
        <img src={beer} alt="beer" />
      </div>
    </>
  );
}

export default Header;
