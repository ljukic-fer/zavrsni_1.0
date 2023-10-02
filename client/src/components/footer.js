import React from "react";
import logo from "../Logo.png";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img src={logo} alt="Logo" width="100" />
    <p className="text-center" style={{fontSize: '13px', color:'grey'}}>
    © HomeRoam 2021
    </p>
  </footer>
);

export default Footer;
