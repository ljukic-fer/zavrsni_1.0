import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/home-report"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home report
    </NavLink>
    <NavLink
      to="/weather"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Weather
    </NavLink>
  </div>
);

export default MainNav;
