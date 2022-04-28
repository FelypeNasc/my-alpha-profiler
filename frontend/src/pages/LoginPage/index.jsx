import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";

import "./style.css";

function LoginPage() {
  const { authenticated, login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", { username, password });

    login(username, password);
  };
  return (
    <div className="page" id="login-page">
      <h1>Profiler</h1>
      <form id="login-form">
        <input
          className="login-input"
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="login-button" onClick={handleSubmit}>
          Login
        </button>
        <p>
          Don't have an account? <NavLink to="/signup"> Signup </NavLink>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
