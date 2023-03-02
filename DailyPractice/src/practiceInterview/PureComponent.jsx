import { useState } from "react";
import ChildHuMain from "./ChildHuMain";

export const PureComponent = () => {
  const [name, setName] = useState("");
  return (
    <>
      <p>{name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <ChildHuMain />
    </>
  );
};
