import { useMemo } from "react";
import { useState } from "react";

export const WithoutMemo = () => {
  const [number, setNumber] = useState(0);
  //   const s = squareNum(number);
  const [count, setCount] = useState(0);

  const s = useMemo(() => {
    return squareNum(number);
  }, [number]);
  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>Output:{s}</div>
      <button onClick={(t) => setCount(count + 1)}>Btn</button>
      <div>Counter:{count}</div>
    </>
  );
};
const squareNum = (number) => {
  console.log("squaring will be done!");
  return Math.pow(number, 2);
};
