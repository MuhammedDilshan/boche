import React from "react";
import "./Transactions.css";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";

const Transactions = () => {
  return (
    <>
      <TopNav title="Transactions" />
      <ul className="list-tra">
        <li>All</li>
        <li>Winning</li>
        <li>Deposit</li>
        <li>Withdraw</li>
        <li>Entry</li>
      </ul>
      <div className="list-amount">
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
      {/* <BottomNav /> */}
    </>
  );
};

export default Transactions;
