import { useEffect } from "react";
import { useState } from "react";
import { GitRepo } from "./gitRepo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const GetProfile = () => {
  const [inputData, setInputData] = useState(""); //inital box for taking userName
  const [userInfo, setuserInfo] = useState([]); //complete data of api
  const [repoData, setRepoData] = useState([]);
  const findUser = () => {
    console.log("SK@finduser");
    fetch(`https://api.github.com/users/${inputData}/repos`)
      .then((data) => data.json())
      .then((data) => setuserInfo(data));
  };
  const showMeRepo = (repoId) => {
    userInfo.map((item) => {
      if (item.id === repoId) {
        console.log("SK@i am inside");
        console.log("SK@", item);
        setRepoData((pre) => [...pre, item]);
      }
    });
  };
  const getRepo = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h3>Enter User Information:</h3>
      <input
        type="text"
        value={inputData}
        placeholder="Enter Github UserId"
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={findUser}>Find</button>
      <ul>
        {userInfo.map((item) => {
          return (
            <span key={item.id}>
              <li onClick={() => showMeRepo(item.id)}>{item.name}</li>
              <li>{item.id}</li>
              <li>{item.description}</li>
              <li>
                <img
                  src={item.owner.avatar_url}
                  alt=""
                  width="150px"
                  height="150px"
                />
              </li>
            </span>
          );
        })}
      </ul>
      <ul>
        {repoData.map((item) => {
          return (
            <>
              <Link
                // key={item.id}
                // to="/getRepoData"
                // state={{ id: "item.id", name: item.name }}
                to={{
                  pathname: "/getRepoData",
                  state: "data", // your data array of objects
                }}
                state={{
                  id: item.id,
                  name: item.name,
                  fork: item.fork,
                  visibility: item.fork,
                  default_branch: item.default_branch,
                  description: item.description,
                }}
              >
                <GitRepo
                  key={item.id}
                  name={item.name}
                  fork={item.fork}
                  visibility={item.fork}
                  default_branch={item.default_branch}
                  description={item.description}
                />
              </Link>
            </>
          );
        })}
      </ul>
    </>
  );
};
