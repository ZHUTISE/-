import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { v4 as uuid } from "uuid";

function EditTodoForm({ editTodo, todos, setTodos }) {
  const [todo, setTodo] = useState(editTodo);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id)
          return {
            ...todo
          };
        })
    );
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
  
  return (
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
  >
    <form id="form" className="todo-form" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Задача"
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
          name="date"
          value={todo.date}
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
          name="endDate"
          value={todo.endDate}
          onChange={handleTaskInputChangedate2}
        />
      </div>
    </form>
    </Box>
  );
}

export default EditTodoForm;