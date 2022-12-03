import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import AllTasks from "./routes/AllTasks";
import Calendar from "./routes/Calendar";
import ErrorPage from "./routes/ErrorPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Context } from "./Components/Context"
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react"; //
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const LOCAL_STORAGE_DATE = "datepick"; //



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []); //
  const [todoDate, setTodoDate] = useState(()=> {
    const saved = localStorage.getItem("todoDate");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("todoDate", JSON.stringify(todoDate));
  }, [todoDate]);

  useEffect(() => {
    const storageTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />
    },
    {
      path: "/Calendar",
      element: <Calendar todos={todos} />
    },
    {
      path: "/AllTasks",
      element: <AllTasks todos={todos} setTodos={setTodos} />
    }
  ]);

  return (
    <Context.Provider value = { {todoDate, setTodoDate} }>
      <NavigationBar todos={todos} setTodos={setTodos} />
      <RouterProvider router={router} />
    </ Context.Provider>
  );
}

export default App;
