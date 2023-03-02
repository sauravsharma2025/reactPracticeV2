import { useRef } from "react";

export const CallBackRefExample = () => {
  let inputRef = useRef(null);

  const onClick = () => {
    console.log("SK@7", inputRef);
    console.log("SK@", inputRef?.value);
  };
  return (
    <>
      <input type="text" ref={(node) => (inputRef = node)} />
      <button onClick={onClick}>Get Value</button>
    </>
  );
};
