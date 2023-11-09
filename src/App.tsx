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

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzaList={pizzaList} />
      </div>
    </div>
  );
};

export default App;
