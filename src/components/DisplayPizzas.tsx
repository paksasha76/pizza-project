import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { SinglePizzas } from "./SinglePizza";

interface DisplayPizzasProps {
  pizzaList: Pizza[];
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList, updatePizza, deletePizza}) => {
  return (
    <div className="container">
      {pizzaList.map((pizza) => {
        return <SinglePizzas pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza}/>;
      })}
    </div>
  );
};
