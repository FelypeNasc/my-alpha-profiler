import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import EditProfile from "./pages/EditProfilePage";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Route
            path="/:role/reset/:token/:email"
            component={PasswordReset}
            exact
          /> */}
        {/* <Route path="/perfil-usuario" exact>
            <ProtectedRoute component={<UserProfile />} />
          </Route> */}
      </Router>
    </div>
  );
}

export default App;
