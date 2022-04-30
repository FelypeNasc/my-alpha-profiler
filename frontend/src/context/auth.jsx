import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";
import { usernameValidate } from "../modules/inputValidation";
import { users } from "../mock/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));

      setIsLoading(false);
    }
  }, []);

  const login = (username, password) => {
    if (usernameValidate(username) && password.length > 0) {
      setIsLoading(true);
      const user = users.find((user) => user.username === username);
      console.log("user", user);
      if (user) {
        if (user.password === password) {
          console.log("login success");
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          navigate("/");
        } else {
          setError("Wrong password");
        }
      } else {
        setError("User not found");
      }
    } else {
      setError("Username or password is invalid");
    }
    setIsLoading(false);
  };

  const logout = () => {
    console.log("Logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, isLoading, error, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//   const apiUrl = "http://localhost:3001/";
//   fetch(apiUrl + "login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));
//         setUser(data.user);
//         navigate("/");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     }
//   );
