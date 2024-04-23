import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoItemContext } from "../store/todoItemContext";


function TodoItems() {
  const {todoitems} = useContext(todoItemContext)
  return (
    <div>
      {todoitems.map((item) => (
        <TodoItem key={item.name} name={item.name} date={item.date}/>
      ))}
    </div>
  );
}

export default TodoItems;
