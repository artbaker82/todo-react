import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, setTodos, filteredTodos }) => {
  const onDeleteHandler = (itemToDelete) => {
    const updatedList = todos.filter((item) => {
      return item.id !== itemToDelete.id;
    });
    console.log(updatedList);
    setTodos(updatedList);
  };

  const onCompleteHandler = (completedItem) => {
    //my original implementation
    // completedItem.completed = !completedItem.completed;

    // setTodos(
    //   todos.map((item) => {
    //     return item.id === completedItem.id ? completedItem : item;
    //   })
    // );

    //from tutorial, using spread operator
    setTodos(
      todos.map((item) => {
        if (item.id === completedItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onDelete={onDeleteHandler}
            onComplete={onCompleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
