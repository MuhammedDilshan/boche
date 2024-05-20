import React from "react";
import "./Failed.css";
import Failed_pay from "../Assets/gif/payment faild 1.gif";

const Failed = () => {
  return (
    <div className="failed">
      <div className="failed-gif">
        <img src={Failed_pay} alt="" />
      </div>
    </div>
  );
};

export default Failed;
