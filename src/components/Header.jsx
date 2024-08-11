import React from "react";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">ThousandsteelTech</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
