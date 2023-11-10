import React, { FC, useState} from "react";
import { Pizza } from "../models/Pizza";

import {AiFillEdit, AiFillDelete} from "react-icons/ai"

import { EditPizzaForm } from "./EditPizzaForm";

interface SinglePizzasProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

export const SinglePizzas: FC<SinglePizzasProps> = ({ pizza, updatePizza, deletePizza}) => {

    const [edit, setEdit] = useState<boolean>(false)

    function handleToggleEdit() {
        setEdit(!edit)
    }

    function handleDelete() {
      deletePizza(pizza.id)
    }

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit}/>
        <AiFillDelete onClick={handleDelete}/>
      </div>
      {
        edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/> : null
      }
    </div>
  );
};
