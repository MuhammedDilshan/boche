import React, { useState, useEffect } from "react";
import "./Transactions.css";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? <TopNav title="Transactions" /> : <HeaderWeb />}
      <div className="web-transation">
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
      </div>
      {/* <BottomNav /> */}
    </>
  );
};

export default Transactions;
