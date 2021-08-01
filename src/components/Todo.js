import React from "react";

const Todo = ({ item, onDelete, onComplete }) => {
  return (
    <div className="todo">
      <li className={renderStyles(item)}>{item.text}</li>
      <button onClick={() => onComplete(item)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => onDelete(item)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
//my original implementation for changing the class dynamically, not sure if I like this or the template literal
//instead. Seems like it kind of pollutes the line.
const renderStyles = (item) => {
  let classes = "todo-item";
  classes = item.completed ? classes + " completed" : classes;

  return classes;
};

export default Todo;
