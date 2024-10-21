// Sidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlinePayments } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import "./sidebar.css";

const Sidebar = (props) => {
  const { isOpen, setOpen } = { ...props };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li className="link-item">
            <NavLink
              onClick={() => setOpen(false)}
              to="/products"
              className={({ isActive }) =>
                isActive ? "link-text active-link" : "link-text"
              }
            >
              Products
              <AiOutlineProduct size={"24px"} />
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              onClick={() => setOpen(false)}
              to="/orders"
              className={({ isActive }) =>
                isActive ? "link-text active-link" : "link-text"
              }
            >
              Orders
              <CiViewList size={'24px'}/>
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              onClick={() => setOpen(false)}
              to="/payments"
              className={({ isActive }) =>
                isActive ? "link-text active-link" : "link-text"
              }
            >
              Payments
              <MdOutlinePayments size={"24px"} />
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink
              onClick={() => setOpen(false)}
              to="/delivery"
              className={({ isActive }) =>
                isActive ? "link-text active-link" : "link-text"
              }
            >
              Delivery
              <TbTruckDelivery size={'24px'}/>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
