import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { SinglePizzas } from "./SinglePizza";

interface DisplayPizzasProps {
  pizzaList: Pizza[];
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList }) => {
  return (
    <div className="container">
      {pizzaList.map((pizza) => {
        return <SinglePizzas pizza={pizza} />;
      })}
    </div>
  );
};
