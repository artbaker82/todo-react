import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, setTodos }) => {
  const onDeleteHandler = (itemToDelete) => {
    const updatedList = todos.filter((item) => {
      return item.id !== itemToDelete.id;
    });
    console.log(updatedList);
    setTodos(updatedList);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onDelete={onDeleteHandler} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
