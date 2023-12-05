import React, { useState } from "react";
import "../App.css";
import logo from "../images/logo.webp";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header className={`header ${isActive ? "active" : ""}`}>
        <div className="menu_container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="menu_items">
            <nav className="nav_menu">
              <ul>
                <li className="nav_link">
                  <a href="/">
                    Features <i class="fa-solid fa-square-full"></i>
                  </a>
                </li>
                <li className="nav_link">
                  <a href="/">
                    FAQ <i class="fa-solid fa-square-full"></i>
                  </a>
                </li>
                <li className="nav_link">
                  <a href="/">
                    Pricing <i class="fa-solid fa-square-full"></i>
                  </a>
                </li>
                <li className="nav_link">
                  <a href="/">Testimonials</a>
                </li>
              </ul>
            </nav>

            <div className="buttons">
              <button href="/">Buy Template</button>
            </div>
          </div>

          <div className="toggle" onClick={handleToggle}>
            <div className="menu_icon">
              <span className="top"></span>
              <span className="middle"></span>
              <span className="end"></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
