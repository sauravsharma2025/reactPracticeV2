import { Link } from "react-router-dom";
import { switchThemeContext } from "../context/themeContext";
import { useContext } from "react";
export const Third = () => {
  const pp = useContext(switchThemeContext);

  return (
    <>
      <h1 style={{ backgroundColor: pp.theme }}>third</h1>
    </>
  );
};
