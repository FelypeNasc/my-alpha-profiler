import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import StandardHeader from "../../components/headers/StandardHeader";
import LogoutButton from "../../components/buttons/LogoutButton";

function HomePage() {
  return (
    <div className="page" id="home-page">
      <StandardHeader>
        <LogoutButton />
      </StandardHeader>
      <main id="home-page-main">
        <div id="profile-picture"></div>
        <div id="profile-info">
          <h2 id="username">Pedro Cardoso</h2>
          <p id="email">pedrão_brabo@email.com</p>
          <p id="birthdate">Birthdate: 01/01/1900</p>
        </div>
        <div className="navigate-buttons">
          <button id="edit-button">Edit Profile</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
