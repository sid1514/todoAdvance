import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch} from "react-icons/fa"; // Using react-icons for icons
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBoolean, toggleTheme } from "../state/Action";

const Navbar = ({ toggleSidBar, setSideBar }) => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.auth.isDarkTheme);
   const lightTheme = {
     backgroundColor: "#FFF",
     color: "#000",
   };

   const darkTheme = {
     backgroundColor: "#000",
     color: "#FFF",
   };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div
        className="container-fluid"
        style={{
          ...(isDarkTheme ? darkTheme : lightTheme),
        }}
      >
        <Icon
          name="bars"
          size="large"
          className="pe-4"
          onClick={() => setSideBar(!toggleSidBar)}
        />
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="Union.png"
            alt="Logo"
            className="img-fluid"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />

          <span className="text-success fw-semibold">DoIt</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaSearch size={20} />
              </a>
            </li>

            <li className="nav-item" onClick={() => dispatch(toggleBoolean())}>
              <a className="nav-link">
                <img
                  src="Icon.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />
              </a>
            </li>
            <li className="nav-item" onClick={() => dispatch(toggleTheme())}>
              <a className="nav-link">
                <img
                  src="Vector.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ width: "25px", height: "25px", marginRight: "10px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
