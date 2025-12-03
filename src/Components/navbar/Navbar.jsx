import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServiceDrop, setMobileServiceDrop] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* DESKTOP NAV */}
          <div className="nav-item desktop-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li
                className="services-menu"
                ref={dropdownRef}
                onClick={() => setDesktopDropdown(!desktopDropdown)}
              >
                <span>
                  Services <ChevronDown size={18} />
                </span>

                {desktopDropdown && (
                  <ul className="dropdown">
                    <li>
                      <Link to="/general-medicine">General Medicine</Link>
                    </li>
                    <li>
                      <Link to="/gynecology">Gynecology</Link>
                    </li>
                    <li>
                      <Link to="/pediatrics">Pediatrics</Link>
                    </li>
                    <li>
                      <Link to="/ent">ENT</Link>
                    </li>
                    <li>
                      <Link to="/physiotherapy">Physiotherapy</Link>
                    </li>
                    <li>
                      <Link to="/orthopedics">Orthopedics</Link>
                    </li>
                    <li>
                      <Link to="/dermatology">Dermatology</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="nav-btn">
              <button className="book-btn">
                Book An Appointment <Calendar size={18} />
              </button>
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="mobile-menu-icon" onClick={() => setMobileMenu(true)}>
            <Menu size={32} color="white" />
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <div className={`side-menu ${mobileMenu ? "open" : ""}`}>
        <div className="side-menu-header">
          <img src={logo} alt="logo" />
          <X
            size={30}
            className="close-btn"
            onClick={() => setMobileMenu(false)}
          />
        </div>

        <ul className="side-links">
          <li>
            <Link to="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenu(false)}>
              About
            </Link>
          </li>

          <li>
            <div
              className="mobile-service-toggle"
              onClick={() => setMobileServiceDrop(!mobileServiceDrop)}
            >
              Services <ChevronDown size={18} />
            </div>

            {mobileServiceDrop && (
              <ul className="mobile-dropdown">
                <li>
                  <Link to="/general-medicine">General Medicine</Link>
                </li>
                <li>
                  <Link to="/gynecology">Gynecology</Link>
                </li>
                <li>
                  <Link to="/pediatrics">Pediatrics</Link>
                </li>
                <li>
                  <Link to="/ent">ENT</Link>
                </li>
                <li>
                  <Link to="/physiotherapy">Physiotherapy</Link>
                </li>
                <li>
                  <Link to="/orthopedics">Orthopedics</Link>
                </li>
                <li>
                  <Link to="/dermatology">Dermatology</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" onClick={() => setMobileMenu(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>
          </li>

          <button className="side-book-btn">
            Book Appointment <Calendar size={18} />
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
