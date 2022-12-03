import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    id: "",
    //userid: "",
    date: "",
    endDate: "",
    //time: "",
    task: "",
    completed: false
  });

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function handleTaskInputChangetask(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleTaskInputChangedate1(e) {
    setTodo({ ...todo, date: e.target.value });
  }
  function handleTaskInputChangedate2(e) {
    setTodo({ ...todo, endDate: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "", userid: "" });
    }
  }
  return (
    <form id="form" className="todo-form" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Опишите задачу, укажите требуемые время и дату"
          type="text"
          fullWidth="true"
          name="task"
          value={todo.task}
          onChange={handleTaskInputChangetask}
        />
      </div>
      <div>
        <TextField
          label="Дата начала"
          InputLabelProps={{
            shrink: true
          }}
          type="date"
          fullWidth="true"
          name="task"
          value={todo.userid}
          onChange={handleTaskInputChangedate1}
        />
      </div>
      <div>
        <TextField
          label="Дата конца"
          InputLabelProps={{
            shrink: true
          }}
          type="date"
          fullWidth="true"
          preventDefault="none"
          name="task"
          value={todo.userid}
          onChange={handleTaskInputChangedate2}
        />
      </div>
    </form>
  );
}

export default TodoForm;

