import React from "react";
import Card from "../UI/Card";
import BeerForm from "./BeerForm";
import BeerItem from "./BeerItem";
import classes from "./BeerList.module.css";

const ancientBeer = [
  {
    id: "1",
    name: "Sunray blonde",
    description: "Priests worsipped the Sun to shine upon malt for this beer.",
    price: 35.99,
  },
  {
    id: "2",
    name: "Dragonblood ale",
    description:
      "In ancient times dragon's blood was spilled on soils where hop is now cultivated.",
    price: 43.5,
  },
  {
    id: "3",
    name: "Red Oak lager",
    description:
      "This beer is aged in barrels from Red Oak - giant holy tree that holds the sky.",
    price: 80.9,
  },
  {
    id: "4",
    name: "Abyssal stout",
    description: "Brave knights drank this beer before crusade to dungeons.",
    price: 63.25,
  },
];
function BeerList() {
  const beerList = ancientBeer.map((beer) => (
    <BeerItem
      id={beer.id}
      key={beer.id}
      name={beer.name}
      description={beer.description}
      price={beer.price}
    />
  ));

  return (
    <section className={classes.beer}>
      <Card>
        <ul>{beerList}</ul>
      </Card>
    </section>
  );
}

export default BeerList;
