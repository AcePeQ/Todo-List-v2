function List({ list, onDeleteTask, onCheckedTask }) {
  const tasks = list.filter((item) => item.isDone === false);
  const finishedTasks = list.filter((item) => item.isDone === true);

  return (
    <>
      <Box>
        <div className="list">
          <h3 className="list__title">Tasks</h3>

          <NewList
            list={tasks}
            onDeleteTask={onDeleteTask}
            onCheckedTask={onCheckedTask}
          />
        </div>
      </Box>

      <Box>
        <div className="list">
          <h3 className="list__title">Finished Tasks</h3>

          <NewList
            list={finishedTasks}
            onDeleteTask={onDeleteTask}
            onCheckedTask={onCheckedTask}
          />
        </div>
      </Box>
    </>
  );
}

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function NewList({ list, onDeleteTask, onCheckedTask }) {
  return (
    <ul>
      {list?.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteTask={onDeleteTask}
          onCheckedTask={onCheckedTask}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteTask, onCheckedTask }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onCheckedTask(item.id)}
        className="inputCheckBox"
        value={item.isDone}
        checked={item.isDone}
      />
      <span className="task">{item.task}</span>
      <button className="btn-delete" onClick={() => onDeleteTask(item)}>
        ✖️
      </button>
    </li>
  );
}

export default List;
