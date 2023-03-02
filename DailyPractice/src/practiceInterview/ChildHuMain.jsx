import { memo } from "react";
const ChildHuMain = () => {
  console.log("SK@Child");
  return <h1>Hello from Child</h1>;
};
export default memo(ChildHuMain);
