import { useContext } from "react";
import { userProfileContext } from "./A";
import C from "./C";

const B = () => {
  console.log("B: re-render");
  const u = useContext(userProfileContext);
  console.log("SK@", u);
  return (
    <>
      <p>I'm B Component{u.userName}</p>
      <C />
    </>
  );
};

export default B;
