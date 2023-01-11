import { useLoaderData } from "react-router-dom";
const MultiRenderingIssueFix = () => {
  const profile = useLoaderData();
  console.log("re-Render");
  return (
    <>
      <p>Profile Detail</p>
    </>
  );
};
