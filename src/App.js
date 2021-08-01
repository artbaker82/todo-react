import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => !item.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Arthur's Todo List App</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Todolist todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
