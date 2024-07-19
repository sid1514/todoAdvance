import "./App.css";

import Signup from "./components/Authentication/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import Maincomp from "./components/Todocomponents/Maincomp";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <div className="grid w-100 ">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Maincomp" element={<Maincomp />} />
      </Routes>
    </div>
  );
}

export default App;
