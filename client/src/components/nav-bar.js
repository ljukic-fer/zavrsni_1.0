import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";
import logo_small from "../Logo_small.png";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <img src={logo_small} alt="Logo" width="20" />
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
