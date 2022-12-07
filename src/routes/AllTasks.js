import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import "../index.css";
import TodoList from "../Components/TodoList";
import removeTodo from "../App";
import toggleComplete from "../App";

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
