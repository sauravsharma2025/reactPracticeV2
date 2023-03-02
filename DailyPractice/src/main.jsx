import React from "react";
import ReactDOM from "react-dom/client";

import { RouteSet } from "./blackTheme/navigation/routes";

import { Third } from "./blackTheme/Third";
import { HavingStyle } from "./MpracticeStyleCompo/havingStyle";
import Appcc from "./MpracticeStyleCompo/transition";
import NodeListComment from "./nest";
import { CallBackRefExample } from "./practiceInterview/callbackRef";
import { Parent } from "./practiceInterview/Parent";
import { PureComponent } from "./practiceInterview/PureComponent";
import { ExampleUseRef } from "./practiceInterview/UseRef";

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
ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);
