import React from "react";
import "./SelectPayment.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SelectPayment = () => {
  return (
    <div className="selectpayment">
      <div className="my-wallet">
        <h6>My Wallet</h6>
        <p>₹1500</p>
      </div>
      <div className="use-wallet">
        <h5>Pay Using Wallet</h5>
        <FaArrowRightLong />
      </div>
      <Link to="/option" className="link">
        <div className="use-wallet">
          <h5>Online Payment</h5>
          <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

export default SelectPayment;
