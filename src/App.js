import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import AllTasks from "./routes/AllTasks";
import Calendar from "./routes/Calendar";
import ErrorPage from "./routes/ErrorPage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Context } from "./Components/Context"
import { useEffect, useState } from "react"; //
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const LOCAL_STORAGE_DATE = "datepick"; //



function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []); //
  const [todoDate, setTodoDate] = useState(()=> {
    const saved = localStorage.getItem(LOCAL_STORAGE_DATE);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_DATE, JSON.stringify(todoDate));
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
      element: <Navigate to="/Calendar" replace />,
      errorElement: <ErrorPage />
    },
    {
      path: "/Calendar",
      element: <Calendar todos={todos} />,
      errorElement: <ErrorPage />
    },
    {
      path: "/AllTasks",
      element: <AllTasks todos={todos} setTodos={setTodos} />,
      errorElement: <ErrorPage />
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
