import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
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
    if (todo.task.trim() && ((todo.date <= todo.endDate)|| (!todo.endDate))) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "", date: "", endDate: ""});
    }
  }
  return (
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
  >
    <form id="form" className="todo-form" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Опишите задачу"
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
          value={todo.date}
          onChange={handleTaskInputChangedate1}
        />
      </div>
      <div>
        <TextField
          label="Дата окончания"
          InputLabelProps={{
            shrink: true
          }}
          type="date"
          fullWidth="true"
          preventDefault="none"
          name="task"
          value={todo.endDate}
          onChange={handleTaskInputChangedate2}
        />
      </div>
    </form>
    </Box>
  );
}

export default TodoForm;

