import { memo } from "react";

const Child = () => {
  console.log("Child");
  return <></>;
};
export default memo(Child);
