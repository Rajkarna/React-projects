import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const Counter = ({ children }) => {
  const addEle = useRef("");
  const dispatch = useDispatch();

  const handleAddClick = () => {
    const addVal = addEle.current.value;
    dispatch({ type: "ADD", payload: addVal });
  };

  const handleSubClick = () => {
    const subVal = addEle.current.value;
    dispatch({ type: "SUB", payload: subVal });
  };

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
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
    </div>
  );
};

export default Counter;
