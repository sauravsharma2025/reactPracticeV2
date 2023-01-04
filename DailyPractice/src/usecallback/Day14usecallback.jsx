import { useMemo } from "react";
import { useCallback, useState } from "react";
import ChildComp from "./childcomp";
const Day14UseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const updateC1 = () => {
    setCounter1((pre) => pre + 1);
  };
  const updateC2 = useMemo(() => {
    setCounter2((pre) => pre + 1);
  }, [setCounter2, counter2]);
  console.log("Prent Re-render");
  return (
    <>
      <p>Counter1:{counter1}</p>
      <p>counte2:{counter2}</p>
      <button onClick={updateC1}></button>
      <ChildComp counter={counter2} onClick={updateC2} />
    </>
  );
};

export default Day14UseCallback;
