import React, { useContext, useState } from "react";
import { List, TextField } from "@mui/material";
import { Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import EditTodoForm from "../Components/EditTodoForm"
import Todo from "./Todo";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { Context } from "./Context";
const LOCAL_STORAGE_KEY = "react-todo-list-todos"; 

function TodoList({ todos, setTodos }) {

  // const [todoDate, setTodoDate] = useState(""); 

  const {todoDate, setTodoDate} = useContext(Context)

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
    <Box sx={{ mt: 2 }}>
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
      <List 
        alignItems="center"
      >
        <TextField
          name="startDate"
          label="Выбор даты"
          InputLabelProps={{ shrink: true}}
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
        />

      {
        todos
        .filter((todo) => (
          todo.date === (todoDate !== "" ? todoDate : todo.date)
        ))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
            handleOpenDialog={handleOpenDialog}
          />
        ))
      }
    </List>
    </Box>
  );
}

export default TodoList;
