import "./style.css";
import { useNavigate } from "react-router-dom";

import StandardHeader from "../../components/headers/StandardHeader";
import LogoutButton from "../../components/buttons/LogoutButton";
import { AuthContext } from "../../context/auth";
import { useContext } from "react";

function HomePage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { username, email, birthday, picURL } = user;

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="page" id="home-page">
      <StandardHeader>
        <LogoutButton />
      </StandardHeader>
      <main id="home-page-main">
        <div id="profile-picture">
          {picURL ? (
            <img src={picURL} alt="Profile" />
          ) : (
            <img src="https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="Profile" />
          )}
        </div>
        <div id="profile-info">
          <h2 id="username">{username}</h2>
          <p id="email">Email: {email}</p>
          <p id="birthdate">Birthdate: {birthday}</p>
        </div>
        <div className="navigate-buttons">
          <button id="edit-button" onClick={handleEditProfile}>
            Edit Profile
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
