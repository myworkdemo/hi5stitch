import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { MenuList } from "./MenuList";
import "./navbar.css";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
      };

  return (
    <nav>
      <div className="logo">Hi5<font>Stitch</font></div>

      <label className="mob-icons">
          <i className="far fa-user"></i>
          <i className="fas fa-cart-plus"></i>
      </label>

      <label for="click" className="menu-btn" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </label>
      <ul className={clicked ? "menu-list" : "menu-list-close"}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>

      <label className="icons">
          <i className="far fa-user"></i>
          <i className="fas fa-cart-plus"></i>
      </label>
      </ul>
      
    </nav>
  );
};

export default Navbar;
