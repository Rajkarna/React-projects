import React from "react";
import "./styles.css";
import Todolist from "./components/Todolist";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <div className="container">
      <div className="heading">Todo list</div>
      <div>
        <InputForm />
        <Todolist />
      </div>
    </div>
  );
};

export default App;
