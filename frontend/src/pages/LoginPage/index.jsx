import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3001/";
    fetch(apiUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          alert("Invalid username or password");
        }
      });
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <form>
        <input
          class="login-input"
          type="text"
          id="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          class="login-input"
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

export default Login;
