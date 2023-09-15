import { useState } from "react";

import { FaTrashAlt } from "react-icons/fa";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      event: "clean the house",
      time: "7am",
      checked: true,
      id: 1,
    },
    {
      event: "coding",
      time: "8am",
      checked: false,
      id: 2,
    },
    { event: "social media", time: "5pm", checked: false, id: 3 },
  ]);
  return (
    <div className="container">
      {tasks.map((task) => (
        <main key={task.id} className="list-container">
          <input type="checkbox" checked={task.checked} />
          <p>
            {task.event} : <span>{task.time}</span>
          </p>
          <FaTrashAlt className="faTrash" />
        </main>
      ))}
    </div>
  );
};

export default Task;
