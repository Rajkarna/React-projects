import React from 'react'
import { useSelector } from 'react-redux'
import SingleTodo from './SingleTodo';

const Todolist = () => {
   const todos =  useSelector(state => state.todo)
  return (
    <>{todos.map(todo => <SingleTodo todo={todo} key={todo.id} />)}</>
  )
}

export default Todolist