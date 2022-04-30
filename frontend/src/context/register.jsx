import React, { useState, createContext } from "react";

import { useNavigate } from "react-router-dom";
// import registerValidate from "../modules/inputValidation";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = (username, password, email, birthday) => {
    console.log("Register func")
    //   const validation = registerValidate(username, password, email, birthday);
    //   if (validation.isValid) {
    //     setIsLoading(true);
    //     const apiUrl = "http://localhost:3001/";
    //     fetch(apiUrl + "register", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password, email, birthday }),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         if (data.token) {
    //           localStorage.setItem("token", data.token);
    //           localStorage.setItem("user", JSON.stringify(data.user));
    //           setUser(data.user);
    //           navigate("/");
    //         }
    //       })
    //       .catch((error) => {
    //         setError(error);
    //       });
    //   } else {
    //     setError(validation.error);
    //   }
  };

  return (
    <RegisterContext.Provider value={{ register, user, error, isLoading }}>
      {children}
    </RegisterContext.Provider>
  );
};
