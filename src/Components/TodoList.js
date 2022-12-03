import React, { useState } from "react";
import { List, TextField } from "@material-ui/core";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import EditTodoForm from "../Components/EditTodoForm";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  const [todoDate, setTodoDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [openDialog, setOpenDialog] = React.useState(false);

  const [editTodo, setEditTodo] = React.useState();

  const handleOpenDialog = (todo) => {
    setEditTodo(todo);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Редактирование задачи</DialogTitle>
        <DialogContent>
          <EditTodoForm editTodo={editTodo} todos={todos} setTodos={setTodos} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Отмена</Button>
          <Button
            form="form"
            type="submit"
            variant="contained"
            onClick={handleCloseDialog}
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
      <List alignItems="center">
        <Box sx={{ textAlign: "center" }}>
          <TextField
            name="startDate"
            label="Выбрать дату"
            InputLabelProps={{ shrink: true, required: true }}
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </Box>
        {todos
          .filter((todo) => todo.date == todoDate)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
              handleOpenDialog={handleOpenDialog}
            />
          ))}
      </List>
    </div>
  );
}

export default TodoList;
