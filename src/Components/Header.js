import React from "react";

function Header() {
  return (
    <aside className="page-sideBar">
      <div className="container">
        <div className="side-pic"></div>
        <ul className="side-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Header;
