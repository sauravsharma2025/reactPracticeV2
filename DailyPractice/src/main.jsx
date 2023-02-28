import React from "react";
import ReactDOM from "react-dom/client";

import { RouteSet } from "./blackTheme/navigation/routes";

import { Third } from "./blackTheme/Third";
import { HavingStyle } from "./MpracticeStyleCompo/havingStyle";
import Appcc from "./MpracticeStyleCompo/transition";
import { ParentComponent } from "./nest";
import ChildElementExample from "./performance/listStyle";
import Dat19PerformanceIssueFixed from "./performance/optimise";
import WithStyledComponentExample from "./performance/StyleComponent";
import Dat19PerformanceIssue from "./performance/test";
import UseIdExample from "./performance/uniqueId";
import { Testone } from "./testone";
import RegistrationForm from "./Yahoo/App";
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
  <ParentComponent />
);
