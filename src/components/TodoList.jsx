import React from "react";
import "../styles.css";

const TodoList = ({ todo, todos, setTodos }) => {
  const handlerOnDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handlerOnComplete = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };
  return (
    <div>
      <li className={`${todo.completed ? "completed" : ""}`}>
        {todo.text}
        <button onClick={handlerOnComplete}>Completed</button>
        <button onClick={handlerOnDelete}>Delete</button>
      </li>
    </div>
  );
};

export default TodoList;
