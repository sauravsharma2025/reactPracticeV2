import { useEffect } from "react";
import { useState } from "react";
import { GitRepo } from "./gitRepo";
import { Link, useSearchParams } from "react-router-dom";
import { GitProfile } from "./gitProfile";
export const GetProfile = () => {
  const [searchNumber, setSearch] = useSearchParams({ userId: undefined });
  const myNum = searchNumber.get("userId");
  console.log("SK@9", myNum);
  const [inputData, setInputData] = useState(""); //inital box for taking userName
  const [userInfo, setuserInfo] = useState([]); //complete data of api
  const [repoData, setRepoData] = useState([]);
  const [follower, setFollower] = useState(false); //uski profile info dega
  const [fetchData, setFetchData] = useState(false); //url info
  console.log("SK@55555555", searchNumber.get("userId"));

  useEffect(() => {
    if (searchNumber.get("userId") !== "undefined") {
      setFollower(true);
      fetch(`https://api.github.com/users/${myNum}/repos`)
        .then((data) => data.json())
        .then((data) => setuserInfo(data));
    }
  }, [fetchData]);
  console.log("SK@", follower);
  const showMeRepo = (repoId) => {
    userInfo.map((item) => {
      if (item.id === repoId) {
        console.log("SK@i am inside");

        setRepoData((pre) => [item]);
      }
    });
  };
  const triggerAPI = () => {
    if (fetchData) {
      setFetchData(false);
    } else if (!fetchData) {
      setFetchData(true);
    }
  };
  const getRepo = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h3>Enter User Information:</h3>
      {/* <Link to={`/books/${inputData}`}>Book{inputData}</Link> */}
      <input
        type="text"
        value={inputData}
        placeholder="Enter Github UserId"
        onChange={(e) => {
          setInputData(e.target.value);
          setSearch({ userId: e.target.value });
        }}
      />
      <button onClick={triggerAPI}>Find</button>
      {follower && <GitProfile id={myNum} />}

      <ul>
        {repoData.map((item) => {
          return (
            <>
              <Link
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
                Get Repo info
              </Link>
            </>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
          backgroundColor: "antiquewhite",
          justifyContent: "center",
        }}
      >
        {userInfo.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                width: "30%",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
                backgroundColor: "aliceblue",
                fontFamily: "sans-serif",
                fontSize: "25px",
              }}
            >
              <div onClick={() => showMeRepo(item.id)}>{item.name}</div>
              <div>{item.id}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
