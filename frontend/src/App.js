import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Login />} />

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

export default App