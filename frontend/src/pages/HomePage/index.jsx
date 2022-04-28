import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import StandardHeader from "../../components/headers/StandardHeader";

function HomePage() {
  return (
    <div className="page" id="home-page">
      <StandardHeader />
      <main id="home-page-main">
        <div id="profile-picture"></div>
        <div id="profile-info">
          <h2 id="username">FelypeNasc</h2>
          <p id="email">felype.nasc@hotmail.com</p>
          <p id="birthdate">Birthdate: 19/02/1996</p>
        </div>
        <div className="navigate-buttons">
          <button id="edit-button">Edit Profile</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
