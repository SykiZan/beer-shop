import React from "react";
import classes from "./BeerInfo.module.css";

function BeerInfo() {
  return (
    <section className={classes["beer-info"]}>
      <h1>Where there’s life, there’s beer.</h1>
      <p>
        Beer is crafted by artists to meet highest standards of quality,
        empowering it's drinker to achieve godlike status.
      </p>
      <p>
        These exquisite types of beer have been available on Panda islands
        exclusively, now can be ordered in our store as well.
      </p>
    </section>
  );
}

export default BeerInfo;
