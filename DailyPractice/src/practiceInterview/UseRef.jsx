import { useRef } from "react";

export const ExampleUseRef = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    console.log("SK@,current Value", inputRef.current.value);
  };
  const focusInput = () => {
    inputRef?.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Real Value</button>
      <button onClick={focusInput}>Get Focus</button>
    </>
  );
};
