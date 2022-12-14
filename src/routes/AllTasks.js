import React from "react";
import "../index.css";
import TodoList from "../Components/TodoList";

export default function ({ todos, setTodos }) {

  return (
    <div class="todo-list-wrapper">
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
