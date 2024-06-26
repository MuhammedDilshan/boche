import React, { useState } from "react";
import "./MyDeposit.css";

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
      <button>Pay Now</button>
    </div>
  );
};

export default MyDeposit;
