import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoreApp } from "./gitHub/CoreApp";
import { GetProfile } from "./gitHub/gitHub";
import { GoogleForm } from "./googleForm/googleForm";
import { Counter, MainComp } from "./HOC/hocExample";

ReactDOM.createRoot(document.getElementById("root")).render(<CoreApp />);
