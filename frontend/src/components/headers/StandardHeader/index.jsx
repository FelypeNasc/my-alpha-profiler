import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../buttons/LogoutButton";
import "./style.css";

const StandardHeader = () => {
  return (
    <header id="standard-header">
      <NavLink to="/">
        <p id="profiler-header">Profiler</p>
      </NavLink>
      <LogoutButton />
    </header>
  );
};

export default StandardHeader;
