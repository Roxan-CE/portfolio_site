import React from "react";

function Header() {
  return (
    <aside className="page-sideBar">
      <h1>Sidebar</h1>
      <ul>
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
    </aside>
  );
}

export default Header;
