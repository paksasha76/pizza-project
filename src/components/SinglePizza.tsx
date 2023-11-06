import React, { FC } from "react";
import { Pizza } from "../models/Pizza";

interface SinglePizzasProps {
  pizza: Pizza;
}

export const SinglePizzas: FC<SinglePizzasProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
    </div>
  );
};
