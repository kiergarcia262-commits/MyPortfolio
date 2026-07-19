import React from "react";

function Header() {
  return (
    <header className="header">
       <div className="logo">My Portfolio</div>

      <nav className="navBar" aria-label="Primary navigation">
        <a href="#about">
          About Me
        </a>
        <a href="#education">
          Education
        </a>
        <a href="#certifications">
          Certifications
        </a>
        <a href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
