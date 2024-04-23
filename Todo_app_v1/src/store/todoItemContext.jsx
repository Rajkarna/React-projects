import React, { createContext, useReducer } from "react";


export const todoItemContext = createContext([]);

const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.name, date: action.payload.date },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter(
        (item) => item.name !== action.payload.name
      );
    }
    return newTodoItems;
  };


const TodoItemsContextProvider = ({children}) => {
  const [todoitems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        date,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (name) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (<todoItemContext.Provider value={{ todoitems, addNewItem, deleteItem }}>
    {children}
  </todoItemContext.Provider>)
};

export default TodoItemsContextProvider;
