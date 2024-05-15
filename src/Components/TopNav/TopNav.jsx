import React from "react";
import "./TopNav.css";
import { FaAngleLeft } from "react-icons/fa6";

export const TopNav = ({ title }) => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="topnav">
      <div className="back-arrow" onClick={handleGoBack}>
        <FaAngleLeft />
      </div>
      <h5>{title}</h5>
    </div>
  );
};
