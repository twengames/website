import React from "react";
import "./navbar.style.css";

export const Navbar = () => {
  return (
    <div>
      <div id="shopify-section-header" className="shopifiy-section">
        <header class="site-header">
            <nav class="site-header__nav">
                <ul class="site-header__links">
                    <li class="site-header__link-item">
                        <a href="/collections/new" class="site-header__link" title="Shop" aria-label="Shop">Shop</a>
                    </li>
                </ul>
            </nav>
        </header>
      </div>
    </div>
  );
};
