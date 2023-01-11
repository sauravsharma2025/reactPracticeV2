import { useState } from "react";
import { createContext } from "react";
import B from "./B";

export const userProfileContext = createContext(null);
const UserProfileProvider = userProfileContext.Provider;
const AFix = () => {
  const [userName, setUserName] = useState("");
  console.log("re-render");
  let obj = {
    userName: userName,
    city: "Ratlam",
  };
  return (
    <>
      <UserProfileProvider value={obj}>
        <div>
          <div style={{ color: "red" }}>
            <p>I am A Component </p>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <B />
        </div>
      </UserProfileProvider>
    </>
  );
};
export default AFix;
