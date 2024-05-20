import React from "react";
import "./TopNav.css";
import { Assets } from "../Assets/Assets";

const TopnavWeb = () => {
  return (
    <div>
      <div className="web-topnav">
        <div className="logo-nav">
          <img src={Assets.Boche_web} alt="" />
        </div>
        <div className="user-top-web">
          <img src={Assets.User} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopnavWeb;
