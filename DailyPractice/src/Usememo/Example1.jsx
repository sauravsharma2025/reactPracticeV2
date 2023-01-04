import { useEffect, useState } from "react";

export const UseMemoExample = () => {
  const [name, setName] = useState("");
  let counter = 0;
  for (let i = 0; i <= 2000; i++) {
    console.log("I", i);
    counter += i;
  }
  useEffect(() => {}, [count]);
  return (
    <>
      <h1>Counter{counter}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </>
  );
};
