import { NavLink } from "react-router-dom";
import "./style.css";

function LogoutButton(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <button id="logout-button" onClick={handleSubmit}>
      <NavLink to="/login">Logout</NavLink>
    </button>
  );
}

export default LogoutButton;
