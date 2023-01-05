import { useLocation } from "react-router-dom";
import { GitRepo } from "./gitRepo";
export function Profile() {
  const location = useLocation();
  const { id, name, fork, visibility, default_branch, description } =
    location.state;

  return (
    <>
      <GitRepo
        key={id}
        name={name}
        fork={fork}
        visibility={visibility}
        default_branch={default_branch}
        description={description}
      />
    </>
  );
}
