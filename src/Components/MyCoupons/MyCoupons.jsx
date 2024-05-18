import React, { useState, useEffect } from 'react';
import "./MyCoupons.css";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import Ticker from "../Assets/Images/ticket.png";
import fetchCoupons from "./fetchCoupons";

const MyCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const cusId = localStorage.getItem('loginUserId');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoupons = await fetchCoupons(cusId);
      setCoupons(fetchedCoupons);
      
    };

    fetchData();
  }, [cusId]);
  return (
    <div className="mycoupons">
      <div className="my-earnings">
        <div className="left-cont">
          <BsFillTrophyFill />
          <h6>My Earnings</h6>
        </div>
        <div className="right-cont">
          <h6>₹20230</h6>
          <FaChevronRight />
        </div>
      </div>
      <div className="scan">
        <input type="text" placeholder="Scan add coupon to your Coupons" />
        <button>Add</button>
      </div>
      <ul className="draw">
        <li>My Coupons</li>
        {/* <li>Won Coupons</li>
        <li>Draw Lots</li> */}
      </ul>
      <ul className="mytick" style={{ padding: "0" }}>
      {coupons.map((coupon) => (
        <li>
          <img src={Ticker} alt="" />
        </li>
           ))}
        {/* <li>
          <img src={Ticker} alt="" />
        </li> */}
      </ul>
    </div>
  );
};

export default MyCoupons;
