import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./BeerForm.module.css";

function BeerForm(props) {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const amount = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 9
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(amount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Enter a valid amount (1-9).</p>}
    </form>
  );
}

export default BeerForm;
