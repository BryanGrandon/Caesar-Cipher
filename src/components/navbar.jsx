import React from "react";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar">
      <a
        className="navbar__logo"
        href="https://github.com/BryanGrandon"
        target="__blank"
      >
        BG.Code
      </a>
      <a
        className="navbar__github"
        href="https://github.com/BryanGrandon/Caesar-Cipher"
        target="__blank"
      >
        <FaGithub />
        Repository
      </a>
    </nav>
  );
}

export default Navbar;
