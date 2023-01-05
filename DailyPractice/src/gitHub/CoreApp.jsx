import { createBrowserRouter as R, RouterProvider } from "react-router-dom";
import { GitRepo } from "./gitRepo";
import { GetProfile } from "./gitHub";
import { Profile } from "./getRepoData";
const router = R([
  {
    path: "/",
    element: <GetProfile />,
  },
  {
    path: "/getRepoData",
    element: <Profile />,
  },
]);
export const CoreApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
