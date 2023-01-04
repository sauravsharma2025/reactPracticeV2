import { useCallback, useMemo } from "react";
import { useState } from "react";
import ChildBtn from "./btnChild";

export const ParentCallBack = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const updateC1 = useMemo(() => {
    setCounter1((prev) => prev + 1);
  }, []);
  const updateC2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, []);
  console.log("Parent-reRender");
  return (
    <>
      Counter Example
      <p>counter1:{counter1}</p>
      <p>counter2:{counter2}</p>
      <button onClick={updateC1}>Counter First</button>
      <ChildBtn onClick={updateC2} counter={counter2} />
    </>
  );
};
