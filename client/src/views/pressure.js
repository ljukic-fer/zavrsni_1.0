import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import  PressList  from "../components/pressure-list";

const Pressure = () => (
  <Fragment>
    <PressList />
    <hr></hr>
    <h2>
      <NavLink
        to="/press-chart"
        exact className="nav-link NavButton hero"
        activeClassName="router-link-exact-active">
          Show chart
      </NavLink>
    </h2>
  </Fragment>
);

export default Pressure;