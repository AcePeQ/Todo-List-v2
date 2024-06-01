import { useState } from "react";

function InputToDo({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTask) return;

    const id = crypto.randomUUID();

    const newTask = {
      id,
      task: inputTask,
      isDone: false,
    };
    onAddTask(newTask);

    setInputTask("");
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        className="inputForm"
        placeholder="So what you want to do?"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      ></input>
      <button className="btn btn-add">Add</button>
    </form>
  );
}

export default InputToDo;
