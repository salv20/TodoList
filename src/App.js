import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Search from "./components/Search";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskName")) || []
  );

  const deleteTask = (id) => {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
  };
  const checkFunction = (id) => {
    const check = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(check);
  };

  const [showAdd, setwhowAdd] = useState(false);
  const showTaskAdd = () => {
    setwhowAdd(!showAdd);
  };

  const [searchState, setsearchState] = useState("");
  const searchFunc = (e) => {
    setsearchState(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("taskName", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header showInput={showTaskAdd} showAdd={showAdd} />
      {showAdd && <Input setTask={setTasks} task={tasks} />}
      <Search searchState={searchState} searchFunc={searchFunc} />
      <Task
        tasks={tasks.filter((task) =>
          task.event
            .toLocaleLowerCase()
            .includes(searchState.toLocaleLowerCase())
        )}
        checkFunction={checkFunction}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
