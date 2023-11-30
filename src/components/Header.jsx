import React from "react";
import logo from "../assets/icons_assets/Logo.svg";
import Nav from "./Nav";
import burger from '../assets/icons_assets/burger.svg'
import { Link } from "react-router-dom";

function Header() {
  let burgerMenu = document.querySelector('.burgerMenu')

  const openMenu = (e) => {
    burgerMenu.classList.contains('active') ? (burgerMenu.classList.remove('active')) : burgerMenu.classList.add('active')
  }
    


  return (
    <>
      <header>
        <div className="container">
          <Link to={'/'}><img src={logo} alt="logo"/></Link>
          <img src={burger} alt="burger" onClick={openMenu} className="icons burger"/>
          <Nav />
        </div>
      </header>
          <div className="burgerMenu" onClick={()=> burgerMenu.classList.remove('active')}>
            <Nav />
          </div>
    </>
  );
}

export default Header;
