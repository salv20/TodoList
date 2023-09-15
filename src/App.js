import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Search from "./components/Search";
import Task from "./components/Task";
function App() {
  const [showAdd, setwhowAdd] = useState(false);
  const showTaskAdd = () => {
    setwhowAdd(!showAdd);
  };
  return (
    <div className="App">
      <Header showInput={showTaskAdd} showAdd={showAdd} />
      {showAdd && <Input />}
      <Search />
      <Task />
    </div>
  );
}

export default App;
