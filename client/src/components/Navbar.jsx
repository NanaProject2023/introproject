import React from "react";
import "./Navbar.css";

export default function Navbar({ setActive }) {
  const links = ["HOME", "BOOTS", "GLASSES", "MAKEUP", "JEANS", "CONTACT"] ;

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link} onClick={() => setActive(link)}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
