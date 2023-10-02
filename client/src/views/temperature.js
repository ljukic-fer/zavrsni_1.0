import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import  TempList  from "../components/temperature-list";

const Temperature = () => (
  <Fragment>
    <TempList />
    <hr></hr>
    <h2>
      <NavLink
        to="/temp-chart"
        exact className="nav-link NavButton hero"
        activeClassName="router-link-exact-active">
          Show chart
      </NavLink>
    </h2>
  </Fragment>
);

export default Temperature;