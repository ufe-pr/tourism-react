import React from "react";
import "./Header.scss";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="__Header">
      <SearchBar className="__Header__SearchBar"></SearchBar>
      <nav>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#tourism">
            <li>Tourism</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
