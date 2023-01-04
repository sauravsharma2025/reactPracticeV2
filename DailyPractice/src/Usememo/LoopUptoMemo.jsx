import { useState } from "react";
import { useMemo } from "react";

export const LoopUptoMemo = () => {
  const [myText, setMyText] = useState("");
  const counter = useMemo(() => {
    let count = 0;
    for (let i = 0; i <= 100; i++) {
      count = count + i;
      console.log("SK@");
    }

    return count;
  });
  const myUseMemo = useMemo(() => {
    return "hello";
  });
  return (
    <>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={myText}
        onChange={(e) => setMyText(e.target.value)}
      />
      <p>My Use Memo{myUseMemo}</p>
    </>
  );
};
