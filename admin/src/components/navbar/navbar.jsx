import { React, useState } from "react";
import "./navbar.css";
import { Outlet, useNavigate } from "react-router-dom";
import Content from "../content/content";
import Sidebar from "../sidebar/SideBar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav id="navbar">
        <div id="menu-icons">
          <div
            id="hamburger-btn"
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "btn-open" : ""}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="logo-container" onClick={() => navigate("/")}>
          <h1 id="nav-logo">THAPRO-admin</h1>
        </div>
      </nav>
      <Sidebar isOpen={open} setOpen={setOpen} />
      <Outlet />
      <Content />
    </>
  );
}

export default Navbar;
