import { memo } from "react";

const ChildBtn = (props) => {
  console.log("Child-Re-Render");
  return (
    <>
      <button onClick={props.onClick}>Counter Second</button>
      <p counter={props.counter}></p>
    </>
  );
};
export default memo(ChildBtn);
