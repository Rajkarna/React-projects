import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add, sub, decrement, increment } from "./store/counter";
import { toggle } from "./store/toggle";


const Counter = ({ children }) => {
  const addEle = useRef("");
  const dispatch = useDispatch();

  const handleAddClick = () => {
    const addVal = addEle.current.value;
    dispatch(add(addVal));
  };

  const handleSubClick = () => {
    const subVal = addEle.current.value;
    dispatch(sub(subVal));
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleToggle = () => {
    dispatch(toggle())
  }
  return (
    <div>
      <input ref={addEle} type="number" />
      <button className="btn btn-warning mx-4" onClick={handleAddClick}>
        Add
      </button>
      <button className="btn btn-primary" onClick={handleIncrement}>
        {" "}
        +{" "}
      </button>
      {children}
      <button className="btn btn-warning mx-4" onClick={handleSubClick}>
        Sub
      </button>

      <button className="btn btn-success" onClick={handleDecrement}>
        {" "}
        -{" "}
      </button>

      <button onClick={handleToggle}>toggle</button>
    </div>
  );
};

export default Counter;
