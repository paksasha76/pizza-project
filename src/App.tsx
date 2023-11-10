import { FC, useState } from "react";
import "./App.css";

import { Pizza } from "./models/Pizza";

import { AddPizzaForm } from "./components/AddPizzaForm";

import { DisplayPizzas } from "./components/DisplayPizzas";


const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map((pizza) => (
      pizza.id === newPizza.id ? newPizza : pizza
    )));
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzaList.filter(pizza => pizza.id !== id)
    setPizzaList(newPizzasList)
  }


  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzaList={pizzaList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  );
};

export default App;
