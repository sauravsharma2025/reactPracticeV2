import React from "react";
import ReactDOM from "react-dom/client";

import Firstblacktheme from "./blackTheme/First";
import { RouteSet } from "./blackTheme/navigation/routes";

import { Third } from "./blackTheme/Third";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(<RouteSet />);
