import { memo } from "react";

const ChildComp = (props) => {
  console.log("Child Re-render");
  return (
    <>
      <p>{props.counter}</p>
      <button onClick={props.onClick}>Btn form Child</button>
    </>
  );
};

export default ChildComp;
