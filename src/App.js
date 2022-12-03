import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import AllTasks from "./routes/AllTasks";
import Calendar from "./routes/Calendar";
import ErrorPage from "./routes/ErrorPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react"; //
const LOCAL_STORAGE_KEY = "react-todo-list-todos"; //



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []); //

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
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
      element: <Calendar />
    },
    {
      path: "/AllTasks",
      element: <AllTasks todos={todos} setTodos={setTodos} />
    }
  ]);

  return (
    <>
      <NavigationBar todos={todos} setTodos={setTodos} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
