import { createBrowserRouter as R, RouterProvider } from "react-router-dom";
import { GitRepo } from "./gitRepo";
import { GetProfile } from "./gitHub";
import { Profile } from "./getRepoData";
import { GitProfile } from "./gitProfile";
import MultiRenderingIssueFix from "./MultiRenderingIssueFix";
import { GetUserProfile } from "./getRepoData";
import { SearchQueryParam } from "./search-query-params";
const router = R([
  {
    path: "/",
    element: <GetProfile />,
  },
  {
    path: "/testMultiplequeryParam",
    element: <SearchQueryParam />,
  },
  {
    path: "/getRepoData",
    element: <Profile />,
  },
  {
    path: "saurav",
    caseSensitive: true,
    element: <GitProfile />,
  },
  {
    path: "/newT",
    element: <MultiRenderingIssueFix />,
    loader: () => {
      const profile = GetUserProfile();
      return profile;
    },
  },
]);
export const CoreApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
