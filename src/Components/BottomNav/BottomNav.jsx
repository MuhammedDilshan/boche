import React, { useState } from "react";
import "./BottomNav.css";
import { Assets } from "../Assets/Assets";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();

  const [activeImages, setActiveImages] = useState({
    home: Assets.Home,
    coupen: Assets.Coupen,
    order: Assets.Order,
    store: Assets.Store,
  });

  // Function to handle image change when link is active
  const handleImageChange = (link, activeImage) => {
    setActiveImages((prevState) => ({
      ...prevState,
      [link]: activeImage,
    }));
  };

  return (
    <div className="bottom-nav">
      <ul className="nav-bar">
        <li>
          <Link
            to="/home"
            className={`link ${location.pathname === "/home" ? "active" : ""}`}
          >
            {location.pathname === "/home" ? (
              <img src={Assets.activeHo} alt="" />
            ) : (
              <img src={Assets.Home} alt="" />
            )}
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/coupen"
            className={`link ${
              location.pathname === "/coupen" ? "active" : ""
            }`}
          >
            {location.pathname === "/coupen" ? (
              <img src={Assets.activeCou} alt="" />
            ) : (
              <img src={Assets.Coupen} alt="" />
            )}
            My Coupons
          </Link>
        </li>
        <li>
          <Link
            to="/order"
            className={`link ${location.pathname === "/order" ? "active" : ""}`}
          >
            {location.pathname === "/order" ? (
              <img src={Assets.activeOr} alt="" />
            ) : (
              <img src={Assets.Order} alt="" />
            )}
            My Orders
          </Link>
        </li>
        <li>
          <Link
            to="/store"
            className={`link ${location.pathname === "/store" ? "active" : ""}`}
          >
            {location.pathname === "/store" ? (
              <img src={Assets.activeSt} alt="" />
            ) : (
              <img src={Assets.Store} alt="" />
            )}
            Stores
          </Link>
        </li>
      </ul>
    </div>
  );
};
