import { useState } from "react";
import Child from "./Child";

export const Parent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((pre) => pre + 1)}>Btn</button>
      <Child />
    </>
  );
};
