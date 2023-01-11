import { useContext } from "react";
import { switchThemeContext } from "../context/themeContext";
export const Second = () => {
  const p = useContext(switchThemeContext);
  console.log("SK@NN", p);
  return (
    <>
      <h1 style={{ backgroundColor: p.theme }}>I am Second Component</h1>
    </>
  );
};
