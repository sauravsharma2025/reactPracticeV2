import { useLoaderData } from "react-router-dom";

const MultiRenderingIssueFix = () => {
  const profile = useLoaderData();

  console.log("Re-render", profile);

  return (
    <>
      <p>Profile Details</p>
      <p>{profile}</p>
    </>
  );
};

export default MultiRenderingIssueFix;
