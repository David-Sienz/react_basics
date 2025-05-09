import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";
 
const router = createBrowserRouter( [
{
path: "/",
element: <Page1 />,
},
{
  path: "/p2",
  element: <Page2 />,
  },
 
]);
 
const root = document.getElementById("root");
 
ReactDOM. createRoot(root). render(<RouterProvider router={router} />);