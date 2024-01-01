/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  //   console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h2>Name: {name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
