import "./App.css";

import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login"
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Maincomp from "./components/Todocomponents/Maincomp";

function App() {
  
  return (
    <div className="grid w-100 ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Maincomp" element={<Maincomp />} />
      </Routes>
    </div>
  );
}

export default App;
