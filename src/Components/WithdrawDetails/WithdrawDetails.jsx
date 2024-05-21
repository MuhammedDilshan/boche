import React, { useState } from "react";
import "./WithdrawDetails.css";
import AccoutDetails from "../../Components/AccoutDetails/AccoutDetails";
import { Button } from "../Button/Button";

const WithdrawDetails = () => {
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [amount, setAmount] = useState();

  const handleButtonClick = () => {
    setShowNewAddressForm(true);
  };
  const priceHandler = (amount) => {
    setAmount(amount);
  };
  const price = [
    {
      id: 1,
      price: 50,
    },
    {
      id: 2,
      price: 100,
    },
    {
      id: 3,
      price: 200,
    },
    {
      id: 5,
      price: 300,
    },
    {
      id: 6,
      price: 400,
    },
    {
      id: 9,
      price: 500,
    },
  ];
  return (
    <div className="withdrawdetails">
      <div className="balance">
        <p>Current Balance</p>
        <h6>₹ 1,500</h6>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Amount"
          className={amount ? `active enter` : "enter"}
          value={amount}
          onChange={(e) => priceHandler(Number(e.target.value))}
        />
      </form>
      <p>Enter amount to deposit to your account</p>
      <ul className="amounts">
        {price?.map(({ price }, i) => (
          <li key={i}>
            <p onClick={() => priceHandler(price)}>₹{price}</p>
          </li>
        ))}
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
      <Button title="Redeem Now" />
    </div>
  );
};

export default WithdrawDetails;
