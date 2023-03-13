import React, { useState } from "react";
import "./useState.css";

export function UseStateHook() {
  const [currentNumber, setCurrentNumber] = useState(0);

  function handelIncrement() {
    setCurrentNumber((prevNumber) => prevNumber + 1);
  }
  function handelDecrement() {
    setCurrentNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <div className="useState_container">
      <button className="useState_button" onClick={handelIncrement}>
        <ion-icon name="add-outline"></ion-icon>
      </button>
      <h1 className="useState_number">{currentNumber}</h1>
      <button className="useState_button" onClick={handelDecrement}>
        <ion-icon name="remove-outline"></ion-icon>
      </button>
    </div>
  );
}
