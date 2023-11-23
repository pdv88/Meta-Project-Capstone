import React from "react";
import logo from "../assets/icons_assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link to={'/'}><img src={logo} alt="logo"/></Link>
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
