import { useState } from "react";
import Button from "./Button";
const Input = ({ setTask, task }) => {
  const [addTask, setaddTask] = useState("");
  const [addTime, setaddTime] = useState("");

  const clickFun = () => {
    const id = Math.floor(Math.random() * 10000);
    setTask(...task);
    if (!addTask) {
      alert("please add task");
      setTask(task);
    } else {
      setTask([
        ...task,
        { event: addTask, time: addTime, id: id, checked: false },
      ]);
      setaddTask("");
      setaddTime("");
    }
  };
  return (
    <div className="input">
      <label htmlFor="task">
        task:
        <input
          type="text"
          value={addTask}
          placeholder="add task"
          onChange={(e) => {
            setaddTask(e.target.value);
          }}
        />
      </label>

      <label htmlFor="time" className="input-two">
        time:
        <input
          type="text"
          value={addTime}
          placeholder="add time"
          onChange={(e) => {
            setaddTime(e.target.value);
          }}
        />
      </label>
      <Button onclick={clickFun} />
    </div>
  );
};

export default Input;
