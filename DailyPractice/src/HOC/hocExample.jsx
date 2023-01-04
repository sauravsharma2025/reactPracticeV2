import { useState } from "react";
export const MainComp = () => {
  return (
    <>
      <HighOrderComp cmp={Counter} />
      <HighOrderCompGreen cmp={Counter} />
    </>
  );
};
const HighOrderCompGreen = (props) => {
  return (
    <h2 style={{ backgroundColor: "green" }}>
      <props.cmp></props.cmp>
    </h2>
  );
};
const HighOrderComp = (props) => {
  return (
    <h2 style={{ backgroundColor: "blue", width: "30%" }}>
      <props.cmp />
    </h2>
  );
};
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Update:{counter}
      <button onClick={() => setCounter(counter + 1)}>Update</button>
    </div>
  );
};
