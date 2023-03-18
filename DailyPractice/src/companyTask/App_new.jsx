import React, { useEffect, useState } from "react";
import "./styles.css";

export function App() {
  const [inputName, setInputName] = useState("");
  const [userData, setUserData] = useState([]);
  const [fork, setFork] = useState(false);
  const [loading, isLoading] = useState(false);
  const GetUserDetail = () => {
    isLoading(true);
    try {
      fetch(`https://api.github.com/users/${inputName}/repos`)
        .then((data) => data.json())
        .then((result) => {
          setUserData(result);
          isLoading(false);
        });
    } catch (err) {
      console.log("SK@catch", err);
    }
  };
  console.log("SK@12", userData);
  let filtered;
  let obj = userData;
  if (obj.length > 0) {
    obj.sort((a, b) => (a.size < b.size ? 1 : -1));

    if (!fork) {
      filtered = obj.filter((data) => data.fork !== true);
    } else {
      filtered = obj.filter((data) => data);
    }
  }

  console.log("SK@", filtered);
  return (
    <div className="App">
      <div className="input">
        <label htmlFor="username">Github username: </label>
        <input
          id="username"
          type="text"
          onChange={(e) => setInputName(e.target.value)}
        />
        <label htmlFor="fork">Include forks: </label>
        <input
          id="fork"
          type="checkbox"
          onChange={() => setFork((pre) => !pre)}
        />
        {!inputName && (
          <button onClick={GetUserDetail} disabled>
            Submit
          </button>
        )}
        {inputName && <button onClick={GetUserDetail}>Submit</button>}
      </div>
      {loading ? <p>Please Wait While Loading</p> : <></>}
      {!Array.isArray(userData) && <p>Not Found</p>}
      {Array.isArray(userData) && userData.length > 1 && (
        <>
          <section>
            <header>
              <div className="col">Name</div>
              <div className="col">Language</div>
              <div className="col">Description</div>
              <div className="col">Size</div>
            </header>
          </section>

          {userData &&
            filtered.map((item, i) => (
              <section key={i}>
                <div className="col">{item.name}</div>
                <div className="col">{item.language}</div>
                <div className="col">{item.description}</div>
                <div className="col">{item.size}</div>
              </section>
            ))}

          <div className="error">Dummy error</div>
        </>
      )}
    </div>
  );
}

export default App;
