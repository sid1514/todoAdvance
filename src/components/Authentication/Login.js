import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../state/Action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginError = useSelector((state) => state.loginError);
  const nav = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(login({ username, password }));
      if (!loginError) {
        nav("/Maincomp");
      }
    } catch (error) {
      console.log("invalid");
    }
    setUsername("");
    setPassword("");
  };
  console.log(loginError);
  const toSignUp = () => {
    nav("/Signup");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 .">
      <div className="w-50 p-6 shadow-lg border-0">
        <div className="card card-body p-4 md:m-4 border-0 gradient-background">
          <form onSubmit={handleLogin}>
            <h2 className="text-center">Login</h2>
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <div className="form-group mb-3">
              <label htmlFor="loginUsername">Username</label>
              <input
                type="text"
                id="loginUsername"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success md:w-25 mb-2 shadow-lg">
              Login
            </button>
          </form>
          <button className="btn btn-link w-100" onClick={toSignUp}>
            Signup first?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
