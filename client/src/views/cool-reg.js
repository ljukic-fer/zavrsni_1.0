import React, {useEffect, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Hero } from "../components";


class CoolReg extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        mergedData: this.props.defaultData
    }
  }
  

  callAPI(){
    Promise.all([
      fetch("http://localhost:6060/heat_stop"),
      fetch("http://localhost:6060/cool_start"),
      fetch("http://localhost:6060/sys_act"),
    ]).then(([urlOneData, urlTwoData, urlThreeData]) => {
      this.setState({
          mergedData: urlOneData + urlTwoData + urlThreeData
      });
    })}

  componentWillMount(){
      this.callAPI();
  }

  

  render() {
      return(
        <Fragment>
          <h1>Success!</h1>
          <hr />
          <p>System settings are up-to-date</p>
          <NavLink
            to="/home-report"
            exact className="nav-link NavButton"
            activeClassName="router-link-exact-active">
              Go back
          </NavLink>
      </Fragment>
      );
  };
};

export default CoolReg;