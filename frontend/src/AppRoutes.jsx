import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditProfilePage from "./pages/EditProfilePage";
import SignUpPage from "./pages/SignUpPage";

import { AuthProvider } from "./context/auth";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/edit-profile" element={<EditProfilePage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default AppRoutes;