import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../state/Action";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { username, password, name };
    dispatch(signup(newUser));
    setUsername("");
    setPassword("");
    setName("");
  };
  const toLogin = () => {
    nav("/");
  };
  return (
    <div className="container mt-5 w-50 fw-semibold ">
      <div className="row justify-content-center shadow-lg ">
        <form
          onSubmit={handleSignup}
          className="card card-body mt-4 row-gap-4 border-0 p-5"
        >
          <h2 className="text-center">Signup</h2>
          <div className="form-group">
            <label htmlFor="signupName">Name</label>
            <input
              type="text"
              id="signupName"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupUsername">Username</label>
            <input
              type="text"
              id="signupUsername"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>
            <input
              type="password"
              id="signupPassword"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block w-25">
            Signup
          </button>
        </form>
      </div>
      <button
        className="border-0 bg-transparent w-25 mt-4 fw-semibold"
        onClick={toLogin}
      >
        <p> Login?</p>
      </button>
    </div>
  );
};

export default Signup;
