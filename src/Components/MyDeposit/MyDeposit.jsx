import React from "react";
import "./MyDeposit.css";
import { MdAccountBalanceWallet } from "react-icons/md";

const MyDeposit = () => {
  return (
    <div className="mydeposit">
      <div className="balance">
        <div className="text">
          <MdAccountBalanceWallet />
          <h6>Current Balance</h6>
        </div>
        <h6>₹800</h6>
      </div>
      <form action="">
        <input type="text" placeholder="Enter Amount" className="enter" />
      </form>
      <p>Enter amount to deposit to your account</p>
      <ul className="amounts">
        <li>
          <p>₹50</p>
        </li>
        <li>
          <p>₹100</p>
        </li>
        <li>
          <p>₹200</p>
        </li>
        <li>
          <p>₹500</p>
        </li>
        <li>
          <p>₹1000</p>
        </li>
        <li>
          <p>₹5000</p>
        </li>
      </ul>
    </div>
  );
};

export default MyDeposit;
