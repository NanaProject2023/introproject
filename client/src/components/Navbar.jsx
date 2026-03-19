import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ cartCount,onCartClick }) {
  const [active, setActive] = useState("HOME");

  const links = ["HOME", "BOOTS", "GLASSES", "MAKEUP", "JEANS", "CONTACT"];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map((link) => (
          <li
            key={link}
            className={active === link ? "active" : ""}
            onClick={() => setActive(link)}
          >
            {link}
          </li>
        ))}
      </ul>

     <div className={cartCount > 0 ? "cart active" : "cart"}>
  <span className="cart-icon">🛒</span>
  <span className="cart-text" onClick={onCartClick}>Cart ({cartCount})</span>
</div>
    </nav>
  );
}