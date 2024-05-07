import React, { useState } from "react";
import "./navbar.css";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [suggestion, setSugesstion] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav id="navbar">
      <div id="logo-container">
        <h1 id="nav-logo">THAPRO</h1>
      </div>
      <ul id="nav-links-container" className={open ? "open" : ""}>
        <li className="link-item">
          <a className="nav-link-text" href="/wallets">
            Wallets
          </a>
        </li>
        <li className="link-item">
          <a className="nav-link-text" href="/belts">
            Belts
          </a>
        </li>
        <li className="link-item">
          <a className="nav-link-text" href="/accessories">
            Accessories
          </a>
        </li>
        <li className="link-item">
          <a className="nav-link-text" href="/forher">
            For Her
          </a>
        </li>
        <li className="link-item">
          <a className="nav-link-text" href="/forhim">
            For Him
          </a>
        </li>
        <li className="link-item">
          <a className="nav-link-text" href="/custom">
            Custom order
          </a>
        </li>
      </ul>
      <div id="menu-icons">
        <div id="search-bar" className="searchbar-active">
          <div
            className={search ? "search-container focus" : "search-container"}
          >
            <MdOutlineClose
            id="search-close"
            onClick={() => {
              setSearch(false);
            }}
          />
            <div className="search-input-container">
              <input
                type="text"
                autoFocus
                id="search-input"
                name="search-input"
                placeholder="Search..."
                onFocus={() => {
                  setSugesstion(true);
                }}
                onBlur={() => {
                  setSugesstion(false);
                }}
              />
              <div className="search-icon">
                <span className="search-icon-inner">
                <CiSearch className="menu-icon" />
                </span>
              </div>
              {suggestion? (
              <ul id="suggestion-box">
                <li>YO Yo</li>
                <li>YO Yo</li>
                <li>YO Yo</li>
                <li>YO Yo</li>
              </ul>
            ) :""}
            </div>
          </div>
        </div>
        {search?"":<CiSearch
          className="menu-icon"
          onClick={() => {
            {
              setSearch(true);
              setOpen(false)
            }
          }}
        />}
        <div className="cart">
          <CiShoppingCart className="menu-icon" />
        </div>
        <div
          id="hamburger-btn"
          onClick={() => {
            setOpen(!open);
            setSearch(false)
          }}
          className={open ? "btn-open" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
