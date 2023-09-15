import { useState } from "react";
import Button from "./Button";
const Input = () => {
  const [addTask, setaddTask] = useState("");
  const [addTime, setaddTime] = useState("");
  return (
    <div className="input">
      <label htmlFor="">
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

      <label htmlFor="" className="input-two">
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
      <Button />
    </div>
  );
};

export default Input;
