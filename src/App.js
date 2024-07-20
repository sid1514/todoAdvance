import "./App.css";

import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login"
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Maincomp from "./components/Todocomponents/Maincomp";
import { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const lightTheme = {
    backgroundColor: "#FFF",
    color: "#000",
  
  };

  const darkTheme = {
    backgroundColor: "#000",
    color: "#FFF",
   
  };
  return (
    <div className="grid " style={isDarkTheme ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Maincomp" element={<Maincomp />} />
      </Routes>
    </div>
  );
}

export default App;
