import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Collaborator from "./Collaborator/Collaborator";
import HeaderMain from "./HeaderMain/HeaderMain";
import "./_header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="container header-top">
        <NavBar />
        <HeaderMain />
      </div>
      <div className="container mt-5">
        <Collaborator />
      </div>
    </header>
  );
};

export default Header;
