import { useContext } from "react";
import { switchThemeContext } from "./navigation/routes";
export const Btn = () => {
  const theme = useContext(switchThemeContext);
  console.log("SK@", theme);
  return (
    <>
      <button onClick={theme.toggleDarkMode}>CHange theme</button>
    </>
  );
};
