import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StandardHeader from "../../components/headers/StandardHeader";

import "./style.css";

function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate();
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="page" id="register-page">
      <StandardHeader />
      <main>
        <h2>Register</h2>
        <form id="register-form">
          <div className="register-input-container">
            <input
              className="reg-input"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              className="reg-input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="reg-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="reg-input"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              className="reg-input"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="reg-input"
              type="text"
              id="reg-birthday"
              placeholder="Birthday"
              onChange={(e) => setBirthday(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
          <div className="button-container">
            <button id="send">Register</button>
          </div>
          <p></p>
        </form>
      </main>
    </div>
  );
}

export default RegisterPage;
