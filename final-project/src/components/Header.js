import React from "react";
import logo from "../assets/icons_assets/Logo.svg";
import Nav from "./Nav";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} />
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
