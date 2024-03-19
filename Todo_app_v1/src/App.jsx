import "./App.scss";
import Addtodo from "./components/Addtodo";
import Todoname from "./components/Todoname";
import Todoname1 from "./components/Todoname1";
import Todoname2 from "./components/Todoname2";




function App() {
  return (
    <div class="container text-center">
      <Todoname />
      <Addtodo />
      <div className="items-container">
      <Todoname1 />
      <Todoname2 />
      </div>
      
      
    </div>
  );
}

export default App;
