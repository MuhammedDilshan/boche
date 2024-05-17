import React, { useState } from "react";
import "./WithdrawDetails.css";
import AccoutDetails from "../../Components/AccoutDetails/AccoutDetails";

const WithdrawDetails = () => {
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  const handleButtonClick = () => {
    setShowNewAddressForm(true);
  };
  return (
    <div className="withdrawdetails">
      <div className="balance">
        <p>Current Balance</p>
        <h6>₹ 1,500</h6>
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
      <div className="withdrw-bank">
        <h4>Withdraw to</h4>
        <div className="bank-details">
          <div className="bank">
            <p>Account Name :Federal Bank</p>
            <p>Holder Name : Siddharth</p>
            <p>Account Number : 80424601179420</p>
            <p>IFSC Code : FDRL0001294</p>
          </div>
          <div className="edit-change">
            <div className="edit">Edit</div>
            <input type="radio" />
          </div>
        </div>
        <button onClick={handleButtonClick}>Add New Address</button>
        {showNewAddressForm && <AccoutDetails />}
      </div>
    </div>
  );
};

export default WithdrawDetails;
