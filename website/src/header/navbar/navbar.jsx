import React from "react";
import "./navbar.style.css";

export const Navbar = () => {
  return (
    <div>
      <div id="shopify-section-header" className="shopifiy-section">
        <header class="site-header">
            <nav >
                <ul class="site-header__links">
                    <li class>
                        <a href="/collections/new" class="site-header__link" title="Home" aria-label="Home">Home</a>
                    </li>
                    <li>
                        <a href="/collections/new" class="site-header__link" title="Contact" aria-label="Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
      </div>
    </div>
  );
};
