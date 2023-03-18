import React from "react";
import ReactDOM from "react-dom/client";

import { ButtonUI } from "./companyTask/ButtonUI";
import OTPfunctionality from "./companyTask/OTP";
import ErrorBoundary from "./ErrorBounderies";
import HomeView from "./Home.Layout";
import { HavingStyle } from "./MpracticeStyleCompo/havingStyle";
import FetchApiFunction from "./test";

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
  <FetchApiFunction />
);
