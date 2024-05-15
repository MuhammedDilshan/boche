import React from "react";
import "./MyWallet.css";
import { GiReceiveMoney } from "react-icons/gi";

export const MyWallet = () => {
  return (
    <div className="mywallet">
      <div className="earning-amout">
        <h6>My Earnings</h6>
        <h5>₹20,230</h5>
      </div>
      <div className="btn-depo">
        <button>
          <GiReceiveMoney /> Deposite
        </button>
      </div>
      <h4>Wallet History</h4>
      <div className="single-amout">
        <div className="single-item">
          <div className="date-time">
            <p>19-04-2024</p>
            <p>10:45 AM</p>
          </div>
          <div className="cash-details">
            <h4>+ ₹40</h4>
            <p>Deposit</p>
          </div>
        </div>
        <div className="single-item">
          <div className="date-time">
            <p>19-04-2024</p>
            <p>10:45 AM</p>
          </div>
          <div className="cash-details">
            <h4>+ ₹40</h4>
            <p>Deposit</p>
          </div>
        </div>
        <div className="single-item">
          <div className="date-time">
            <p>19-04-2024</p>
            <p>10:45 AM</p>
          </div>
          <div className="cash-draw">
            <h4>- ₹40</h4>
            <p>Withdraw</p>
          </div>
        </div>
      </div>
    </div>
  );
};
