import React from "react";

const Todo = ({ item, onDelete }) => {
  return (
    <div className="todo">
      <li className="todo-item">{item.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => onDelete(item)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
