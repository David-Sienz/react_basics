import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import Excercise_Router from "./components/pages/Excercise_Router";

const router = createBrowserRouter( [
{
path: "/",
element: <Page1 />,
},
{
  path: "/p2",
  element: <Page2 />,
  },
{
  path: "/super",
  element: <Excercise_Router />,
  },
]);
 
const root = document.getElementById("root");
 
ReactDOM. createRoot(root). render(<RouterProvider router={router} />);