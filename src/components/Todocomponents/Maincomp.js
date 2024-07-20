import React, { useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Maincomp = () => {
  const [toggleSidBar,setSideBar]=useState(false)
  return (
    <>
      <Navbar toggleSidBar={toggleSidBar} setSideBar={setSideBar} />
      
      <Dashboard toggleSidBar={toggleSidBar} />
    </>
  );
};

export default Maincomp;
