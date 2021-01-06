import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/logo.png";
import "./_navBar.scss";

const NavBar = () => {
  const [navItem, setNavItem] = useState("home");
  const hasToggle = (item) => {
    setNavItem(item);
  };

  return (
    <nav className="navbar main-nav navbar-expand-lg navbar-light pt-3 mb-0 mb-lg-5">
      <Link to="/" className="navbar-brand">
        <img src={logo} className="img-fluid" alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li
            onClick={() => hasToggle("home")}
            className={`nav-item ${
              navItem === "home" ? "nav__active" : "text-black"
            }`}
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li
            onClick={() => hasToggle("portfolio")}
            className={`nav-item ${
              navItem === "portfolio" ? "nav__active" : "text-black"
            }`}
          >
            <Link to="/" className="nav-link">
              Our Portfolio
            </Link>
          </li>
          <li
            onClick={() => hasToggle("team")}
            className={`nav-item ${
              navItem === "team" ? "nav__active" : "text-black"
            }`}
          >
            <Link to="/" className="nav-link">
              Our Team
            </Link>
          </li>
          <li
            onClick={() => hasToggle("contact")}
            className={`nav-item ${
              navItem === "contact" ? "nav__active" : "text-black"
            }`}
          >
            <Link to="/" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li
            onClick={() => hasToggle("dashboard")}
            className={`nav-item ${
              navItem === "dashboard" ? "nav__active" : "text-black"
            }`}
          >
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard">
              <button className="brand-btn">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
