import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar({ cartCount, onCartClick }) {
  const [active, setActive] = useState("HOME");

  const links = ["HOME", "BOOTS", "GLASSES", "MAKEUP", "JEANS", "CONTACT"];

  return (
    <nav className="navbar">
      <ul className="nav-links">
  
  {links.map((link) => (
  <li key={link} className={active === link ? "active" : ""}>
    
    {link === "JEANS" ? (
      <Link to="/jeans" onClick={() => setActive(link)}>
        {link}
      </Link>

    ) : link === "HOME" ? (
      <Link to="/" onClick={() => setActive(link)}>
        {link}
      </Link>

    ) : link === "GLASSES" ? (
      <Link to="/glasses" onClick={() => setActive(link)}>
        {link}
      </Link>

    ) : link === "BOOTS" ? (
      <Link to="/boots" onClick={() => setActive(link)}>
        {link}
      </Link>

    ) : (
      <span onClick={() => setActive(link)}>
        {link}
      </span>
    )}

  </li>
))}
      </ul>

      <div className={cartCount > 0 ? "cart active" : "cart"}>
        <span className="cart-icon">🛒</span>
        <span className="cart-text" onClick={onCartClick}>
          Cart ({cartCount})
        </span>
      </div>
    </nav>
  );
}