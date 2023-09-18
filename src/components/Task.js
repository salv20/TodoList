import { FaTrashAlt } from "react-icons/fa";

const Task = ({ tasks, checkFunction, deleteTask }) => {
  return (
    <div className="container">
      {tasks.map((task) => (
        <main key={task.id} className="list-container">
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => checkFunction(task.id)}
          />
          <p>
            {task.event} : <span>{task.time}</span>
          </p>
          <FaTrashAlt className="faTrash" onClick={() => deleteTask(task.id)} />
        </main>
      ))}
    </div>
  );
};

export default Task;
