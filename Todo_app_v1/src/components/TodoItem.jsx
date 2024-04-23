import React, { useContext } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { todoItemContext } from '../store/todoItemContext';



function TodoItem({name, date}) {
  const {deleteItem} = useContext(todoItemContext)
  return (
    <div classNameName="todo-item">
      <div className="row">
        <div className="col-6">
        {name}
        </div>
        <div className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button classNameName="btn btn-danger _btn"
          onClick={() => deleteItem(name)}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem