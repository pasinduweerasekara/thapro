import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import "./navbar.css";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [navbarHide, setNavbarHide] = useState(false);
  const lastScrollPos = useRef(0); // Use useRef to track scroll position without causing re-renders
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (lastScrollPos.current < currentScrollPos && !navbarHide) {
      setNavbarHide(true);
    } else if (lastScrollPos.current > currentScrollPos && navbarHide) {
      setNavbarHide(false);
    }

    lastScrollPos.current = currentScrollPos;
  }, [navbarHide]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSearch(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("noscroll", open || search);
  }, [open, search]);

  const handleSubmenuOpen = () => {
    document.getElementById("sub-menu").classList.add("active");
    document.getElementById("drop-down-icon").classList.add("active");
  };

  const handleSubmenuClose = () => {
    document.getElementById("sub-menu").classList.remove("active");
    document.getElementById("drop-down-icon").classList.remove("active");
  };
  
  return (
    <>
      <nav id="navbar" className={navbarHide ? "navbar-hide" : ""}>
        <div id="logo-container" onClick={() => navigate("/")}>
          <h1 id="nav-logo">THAPRO-admin</h1>
        </div>
        <ul id="nav-links-container" className={open ? "open" : ""}>
          <li className="link-item" onClick={() => setOpen(false)}>
          </li>
          <li
            onMouseEnter={handleSubmenuOpen}
            onMouseLeave={handleSubmenuClose}
            className="link-item"
            id="sub-menu-link"
          >
            <NavLink
              className="nav-link-text"
              to="/products/all"
              onClick={() => setOpen(false)}
            >
              Products 
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="/orders">
              Orders
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="/payments">
              Payments
            </NavLink>
          </li>
        </ul>
        <div id="menu-icons">
          <div
            id="hamburger-btn"
            onClick={() => {
              setOpen(!open);
              setSearch(false);
            }}
            className={open ? "btn-open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

// Utility function to debounce the scroll event handler
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default Navbar;