import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/Todoslice";

const InputForm = () => {
   const dispatch =  useDispatch()
    const inputRef = useRef(null)
    

    const handleForm = (e) => {
        e.preventDefault();
        let todo = inputRef.current.value
        dispatch(addTodo ({id:Date.now(),todo,isDone:false}));
        inputRef.current.value = '';
    }
   
  return (
    <form className="input" onSubmit={handleForm}>
      <input className="input__box" type="text" placeholder="enter todo" ref={inputRef} />
      <button className="input_button" type="submit">Add</button>
    </form>
  );
};

export default InputForm;
