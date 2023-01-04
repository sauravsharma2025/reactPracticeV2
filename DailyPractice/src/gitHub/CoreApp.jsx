import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GitRepo } from "./gitRepo";
import { GetProfile } from "./gitHub";
export const CoreApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetProfile />} />
          <Route path="/GitRepo" element={<GitRepo />} />
        </Routes>
      </Router>
    </>
  );
};
