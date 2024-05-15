import React from "react";
import "./BottomNav.css";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <ul className="nav-bar">
        <li>
          <Link to="/" className="link">
            <img src={Assets.Home} alt="" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/coupen" className="link">
            <img src={Assets.Coupen} alt="" />
            My Coupons
          </Link>
        </li>
        <li>
          <Link to="/order" className="link">
            <img src={Assets.Order} alt="" />
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/store" className="link">
            <img src={Assets.Store} alt="" />
            Stores
          </Link>
        </li>
      </ul>
    </div>
  );
};
