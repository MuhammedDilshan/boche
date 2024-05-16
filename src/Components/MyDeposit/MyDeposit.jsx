import React, { useState } from "react";
import "./MyDeposit.css";
import { MdAccountBalanceWallet } from "react-icons/md";

const MyDeposit = () => {
  const [amount, setAmount] = useState();

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
    <div className="mydeposit">
      <div className="balance">
        <div className="text">
          <MdAccountBalanceWallet />
          <h6>Current Balance</h6>
        </div>
        <h6>₹800</h6>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Amount"
          className={amount ? `active enter` : "enter"}
          value={amount}
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
    </div>
  );
};

export default MyDeposit;
