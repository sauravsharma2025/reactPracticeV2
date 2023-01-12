import React from "react";
import ReactDOM from "react-dom/client";

import { RouteSet } from "./blackTheme/navigation/routes";

import { Third } from "./blackTheme/Third";
import Dat19PerformanceIssueFixed from "./performance/optimise";
import WithStyledComponentExample from "./performance/StyleComponent";
import Dat19PerformanceIssue from "./performance/test";
import UseIdExample from "./performance/uniqueId";
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <WithStyledComponentExample />
);
