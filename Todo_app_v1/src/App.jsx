import "./App.scss";
import Addtodo from "./components/Addtodo";
import TodoItems from "./components/TodoItems";
import Todoname from "./components/Todoname";
import TodoItemsContextProvider from "./store/todoItemContext";

function App() {
  return (
    <TodoItemsContextProvider>
      <div classNameName="container text-center">
        <Todoname />
        <Addtodo />
        <div classNameName="items-container">
          <TodoItems />
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
