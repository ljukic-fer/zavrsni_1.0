import React from "react";
import FrontpageLogin from "./frontpage-login";
import logo from "../Logo.png";

const Frontpage = () => (
  <div className="text-center front">
    <h1 className="Banner">
    <img src={logo} alt="Logo" />
    </h1>
    <div className="Message">
        <div className="Title">
            <h3>There is no place like</h3>
            <h1>Home</h1>
            <p>Log in to access your smart home</p>
        </div>
    </div>
    <div className="NavButtons">
        <FrontpageLogin />
    </div>
      
  </div>
);


export default Frontpage;
