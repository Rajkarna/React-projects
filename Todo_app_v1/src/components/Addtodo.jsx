import React, { useContext, useRef, useState } from "react";
import { CgFolderAdd } from "react-icons/cg";
import { todoItemContext } from "../store/todoItemContext";


function Addtodo() {
  
  const addTodoItem = useRef("")
  const adddueDate = useRef("")

  const {addNewItem} = useContext(todoItemContext)


  const handleAddBtn = () => {
    const item = addTodoItem.current.value;
    const date = adddueDate.current.value;
    addNewItem(item, date);
    addTodoItem.current.value = ""
    adddueDate.current.value = ""
  };
  return (
    <div>
      <div classNameName="row">
        <div classNameName="col-6">
          <input
            type="text"
            ref={addTodoItem}
            placeholder="enter todo"
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            ref={adddueDate}
          />
        </div>
        <div classNameName="col-2">
          <button classNameName="btn btn-success _btn" onClick={handleAddBtn}>
            <CgFolderAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
