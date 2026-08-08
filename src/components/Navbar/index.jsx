import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? "active" : ""}`}>

      {/* Logo */}

      <NavLink
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        TechLogex Solutions
      </NavLink>


      {/* Mobile Menu Button */}

      <button
        className="mobile-navbar-btn"
        type="button"
        aria-label="Toggle Navigation"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={toggleMenu}
      >
        <FaBars
          className="mobile-nav-icon open-icon"
          aria-hidden="true"
        />

        <FaTimes
          className="mobile-nav-icon close-icon"
          aria-hidden="true"
        />
      </button>


      {/* Navigation */}

      <nav
        className="navbar"
        id="main-navigation"
        aria-label="Main Navigation"
      >
        <ul className="navbar-list">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Careers
            </NavLink>
          </li>

        <li>
          <NavLink
            to="/contact"
            className="navbar-cta"
            onClick={closeMenu}
          >
            Let's Talk
          </NavLink>
        </li>

        </ul>
      </nav>

    </header>
  );
}

export default Navbar;