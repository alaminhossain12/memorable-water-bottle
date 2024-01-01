/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Bottles.css";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = (bottle) => {
    // console.log("Bottle Added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <h4>Cart: {cart.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
