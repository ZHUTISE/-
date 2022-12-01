import React, {useState} from "react";
import { Checkbox, Button, ListItem, Typography } from "@material-ui/core";
import { Card, CardContent, CardActions, Chip, Stack } from '@mui/material';

function Todo({ todo, toggleComplete, removeTodo, handleOpenDialog }) {

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  function handleEditTodo() {
    handleOpenDialog(todo);
  }

  return (
    <Card
      sx={{ marginTop: 1}}
    >
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Chip label={todo.date? todo.date : 'no Date'} />
          <Chip label={todo.endDate? todo.endDate : 'no endDate'} />
          <Chip label={todo.author? todo.author : 'no Author'} />
        </Stack>
        <Typography
          sx={{ marginTop: 10}}
        >
          {todo.task}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={1}>
          {
            !todo.completed ?
            <Button onClick={handleCheckboxClick}>
              Отметить задачу
            </Button>
            :
            <Button 
              variant="contained" 
              onClick={handleCheckboxClick} 
              style={{
                backgroundColor: "#1976d2",
              }}
            >
              Задача сделана
            </Button>
          }
          <Button onClick={handleEditTodo}>
            Редактировать
          </Button>
          <Button onClick={handleRemoveClick}>
            Закрыть задачу
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default Todo;

//TODO: сделать редактирование удаление