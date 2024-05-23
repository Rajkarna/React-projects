import React, { useRef, useState } from "react";

import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo, updateTodo } from "../store/Todoslice";

const SingleTodo = ({ todo }) => {
    const inputRef = useRef("")
  const [item, setTodo] = useState(todo.todo);
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    setTodo(inputRef.current.value)
    dispatch(updateTodo({id,item}))
  };

  const handleEdit = (id) => {
    dispatch(editTodo(id))
  }

  return (
    <div className="todo_item">
      {todo.isEdit ? (
        <div className="edit_input">
          <input className="todo_box"
            type="text"
            ref={inputRef}
            placeholder="edit todo"
            value={item}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={() => handleUpdate(todo.id)} className="update_button">update</button>
        </div>
      ) : todo.isDone ? (
        <s className="todo_title">{todo.todo}</s>
      ) : (
        <div className="todo_title">{todo.todo}</div>
      )}

      {!todo.isEdit && (
        <div>
          <MdDone onClick={() => handleDone(todo.id)} size={20} />
          <MdEdit size={20} onClick={() => handleEdit(todo.id)} />
          <MdDelete size={20} onClick={() => handleDel(todo.id)} />
        </div>
      )}
    </div>
  );
};

export default SingleTodo;
