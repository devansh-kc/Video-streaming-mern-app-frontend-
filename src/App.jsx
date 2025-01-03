import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import conf from "./Conf";
import Register from "./Page/Register";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
}

export default App;
