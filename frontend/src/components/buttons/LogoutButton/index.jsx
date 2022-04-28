import { NavLink } from "react-router-dom";
import "./style.css";

function LogoutButton(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <NavLink to="/login" >
      <button id="logout-button" onClick={handleSubmit}>Logout</button>
    </NavLink>
  );
}

export default LogoutButton;
