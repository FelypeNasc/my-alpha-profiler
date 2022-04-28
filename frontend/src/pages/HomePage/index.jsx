import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function HomePage() {
  return (
    <div id="home-page">
      <h1>Home Page</h1>
      <div id="profile-pic"></div>
      <div id="profile-info">
        <h2 id="username">FelypeNasc</h2>
        <p id="email">felype.nasc@hotmail.com</p>
        <p id="birthdate">Birthdate: 19/02/1996</p>
      </div>
      <div className="navigate-buttons">
        <button id="logout-button">Logout</button>

        <button id="edit-button">
          <NavLink to="/edit">Edit</NavLink>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
