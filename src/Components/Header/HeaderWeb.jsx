import React, { useState } from "react";
import "./Header.css";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

const HeaderWeb = () => {
  const [currentScreen, setCurrentScreen] = useState("");

  const handleNavClick = (screen) => {
    setCurrentScreen(screen);
  };
  const handleUserImgClick = () => {
    document.body.classList.add("modal-active", "overflow-hidden");
  };

  return (
    <div>
      <header className="head-web">
        <div className="web-logo">
          <img src={Assets.Boche_web} alt="Logo" />
        </div>
        <ul className="nav">
          <li>
            <Link
              to="/home"
              className={`link ${currentScreen === "home" ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/coupen"
              className={`link ${currentScreen === "coupen" ? "active" : ""}`}
              onClick={() => handleNavClick("coupen")}
            >
              My Coupons
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className={`link ${currentScreen === "order" ? "active" : ""}`}
              onClick={() => handleNavClick("order")}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className={`link ${currentScreen === "store" ? "active" : ""}`}
              onClick={() => handleNavClick("store")}
            >
              Stores
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`link ${
                currentScreen === "transactions" ? "active" : ""
              }`}
              onClick={() => handleNavClick("transactions")}
            >
              Transactions
            </Link>
          </li>
          <div className="user-web" onClick={handleUserImgClick}>
            <img src={Assets.User} alt="User" />
          </div>
        </ul>
        <Profile />
      </header>
    </div>
  );
};

export default HeaderWeb;
