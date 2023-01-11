import { useContext } from "react";
import { switchThemeContext } from "../context/themeContext";
import { Link } from "react-router-dom";
const Firstblacktheme = () => {
  console.log("SK@fff");
  const theme = useContext(switchThemeContext);

  return (
    <>
      <h1 style={{ backgroundColor: theme.theme, color: "blue" }}>
        I am first Component
      </h1>
      <button onClick={theme.toggleDarkMode}>Change</button>
      <Link to="/Second">Second</Link>
    </>
  );
};
export default Firstblacktheme;
