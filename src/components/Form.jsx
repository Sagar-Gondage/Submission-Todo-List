import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Form = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handlerOnChanger = (e) => {
    setInput(e.target.value);
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: input,
        completed: false,
        id: Math.floor(Math.random() * 1000)
      }
    ]);
    setInput("");
  };

  useEffect(() => {
    handlerOnFilter();
  }, [todos, status]);

  const handlerOnFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          value={input}
          onChange={handlerOnChanger}
          placeholder="Add Todo"
        />
        <button disabled={!input}>Submit</button>
      </form>
      <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <Todo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
};

export default Form;
