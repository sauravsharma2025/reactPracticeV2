import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoreApp } from "./gitHub/CoreApp";
import { GetProfile } from "./gitHub/gitHub";
import { GoogleForm } from "./googleForm/googleForm";
import { Counter, MainComp } from "./HOC/hocExample";
import Home from "./practiceRouter/Home";
import Error from "./practiceRouter/Error";
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
ReactDOM.createRoot(document.getElementById("root")).render(<CoreApp />);
