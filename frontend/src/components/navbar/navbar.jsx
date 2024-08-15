import React, { useContext, useEffect, useMemo, useState } from "react";
import "./navbar.css";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { cartContext } from "../../context/CartContextProvider";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";

function Navbar() {
  const { cart } = useContext(cartContext);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolPos, setScrPos] = useState([0, 0]);
  const [navbarHide, setNavbarHide] = useState(false);

  if (open || search) {
    document.querySelector("body").classList.add("noscroll");
  } else document.querySelector("body").classList.remove("noscroll");

  window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      setSearch(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", getScrPos, { passive: true });

    return () => {
      window.removeEventListener("scroll", getScrPos);
    };
  }, []);

  const getScrPos = () => {
    setScrPos(scrolPos.reverse());
    setScrPos((scrolPos[1] = window.scrollY));
    if (scrolPos[0] < scrolPos[1]) {
      setNavbarHide(true);
    } else setNavbarHide(false);
  };

  const handleSearchClose = () => {
    setSearch(false);
  };

  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalCartItems(totalQuantity);
  }, [cart]);

  const navigate = useNavigate();
  return (
    <>
      <nav id="navbar" className={navbarHide ? "navbar-hide" : ""}>
        <div id="logo-container" onClick={() => navigate("/")}>
          <h1 id="nav-logo">THAPRO</h1>
        </div>
        <ul id="nav-links-container" className={open ? "open" : ""}>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="wallets">
              Wallets
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="belts">
              Belts
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="accessories">
              Accessories
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="women">
              For Her
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" to="men">
              For Him
            </NavLink>
          </li>
          <li className="link-item" onClick={() => setOpen(false)}>
            <NavLink className="nav-link-text" href="#">
              Custom order
            </NavLink>
          </li>
        </ul>
        <div id="menu-icons">
          <div id="search-bar" className={search ? "searchbar-active" : ""}>
            <div
              className={search ? "search-container focus" : "search-container"}
            >
              <MdOutlineClose id="search-close" onClick={handleSearchClose} />
              <div className="search-input-container">
                <input
                  type="text"
                  id="search-input"
                  name="search-input"
                  placeholder="Search..."
                />

                <div className="search-icon">
                  <span className="search-icon-inner">
                    <CiSearch className="menu-icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {!search && (
            <CiSearch
              className="menu-icon"
              onClick={() => {
                setSearch(true);
                setOpen(false);
              }}
            />
          )}
          <Link to="cart">
            <div id="cart" onClick={() => setOpen(false)}>
              <CiShoppingCart className="menu-icon" />
              {cart.length > 0 ? (
                <span id="cart-item-count">{totalCartItems}</span>
              ) : (
                ""
              )}
            </div>
          </Link>
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

export default Navbar;
