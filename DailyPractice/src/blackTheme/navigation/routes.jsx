import { createBrowserRouter as R, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Firstblacktheme from "../First";
import { Second } from "../Second";
import { SwitchThemeProvider } from "../../context/themeContext";
console.log("SK@");

const router = R([
  {
    path: "/",
    element: <Firstblacktheme />,
  },
  {
    path: "/second",
    element: <Second />,
  },
]);
export const RouteSet = () => {
  const [theme, setTheme] = useState("white");
  const toggleDarkMode = (dark) => {
    setTheme(theme === "black" ? "white" : "black");
  };
  return (
    <>
      <SwitchThemeProvider value={{ theme, toggleDarkMode }}>
        <RouterProvider router={router} />
      </SwitchThemeProvider>
    </>
  );
};
