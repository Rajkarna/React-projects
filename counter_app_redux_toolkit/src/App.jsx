import React from "react";
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from "react-redux";

const App = () => {
 const {count} =  useSelector(state => state.counter)
 const {toggle} =  useSelector(state => state.toggle)

  return (
    <center className="mt-5">
      <Counter>
        <h1>count : {count}</h1>
        {toggle ? <h2>ON</h2>: <h2>OFF</h2>}
      </Counter>
    </center>
  );
};

export default App;
