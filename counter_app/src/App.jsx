import React from "react";
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from "react-redux";

const App = () => {
 const count =  useSelector(state => state.count)
  return (
    <center className="mt-5">
      <Counter>
        <h1>count : {count}</h1>
      </Counter>
    </center>
  );
};

export default App;
