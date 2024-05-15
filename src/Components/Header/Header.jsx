import React, { useState } from "react";
import "./Header.css";
import { Assets } from "../Assets/Assets";
import Profile from "../Profile/Profile";

export const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleUserImgClick = () => {
    document.body.classList.add("modal-active", "overflow-hidden");
  };

  return (
    <div>
      <header>
        <div className="user-img" onClick={handleUserImgClick}>
          <img src={Assets.User} alt="" />
        </div>
        <h3>BOCHE MART</h3>
        <div className="boche-logo">
          <img src={Assets.Logo} alt="" />
        </div>
      </header>
      <Profile />
    </div>
  );
};
