import React from "react";
import "./SelectPayment.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SelectPayment = () => {
  return (
    <div className="selectpayment">
      {/* <div className="my-wallet"> */}
      <p>₹1500</p>
      {/* </div> */}
      <h4>Pay Using</h4>
      <div className="use-wallet">
        <h5>Deposit Wallet</h5>
        <input type="radio" />
      </div>
      <div className="use-wallet">
        <h5>Winning Wallet</h5>
        <input type="radio" />
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
