import React from "react";
import TodoList from "./TodoList";

const Todo = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
