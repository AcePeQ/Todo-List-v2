import Header from "./Header";
import Main from "./Main";
import List from "./List";
import InputToDo from "./InputToDo";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleCheckedTask(taskID) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskID ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  function handleDeleteTask(curTask) {
    setTasks((tasks) => tasks.filter((task) => task.id !== curTask.id));
  }

  return (
    <div className="app">
      <Header />
      <InputToDo onAddTask={handleAddTask} />

      <Main>
        <List
          list={tasks}
          onDeleteTask={handleDeleteTask}
          onCheckedTask={handleCheckedTask}
        />
      </Main>
    </div>
  );
}
