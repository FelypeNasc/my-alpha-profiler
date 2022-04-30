import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../context/register";

import StandardHeader from "../../components/headers/StandardHeader";
import "./style.css";

function RegisterPage() {
  console.log(useContext(RegisterContext))
  const { register } = useContext(RegisterContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmitRegister(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // register(username, password, email, birthday);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setBirthday("");

      navigate("/");

      setError("");
    }
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
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="reg-input"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
                type="text"
                id="reg-birthday"
                placeholder="Birthday"
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
            <div className="button-container">
              <button id="send">Register</button>
            </div>
            <div className="error-container">{error && <p className="error">{error}</p>}</div>
            <p></p>
          </form>
        </main>
    </div>
  );
}

export default RegisterPage;
