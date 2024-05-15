import React from "react";
import "./MyCoupons.css";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";
import Ticker from "../Assets/Images/ticket.png";

const MyCoupons = () => {
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
        <h6>Scan add coupon to your Coupons</h6>
        <button>
          Scan QR <MdQrCodeScanner />
        </button>
      </div>
      <ul className="draw">
        <li>My Coupons</li>
        <li>Won Coupons</li>
        <li>Draw Lots</li>
      </ul>
      <ul className="mytick">
        <li>
          <img src={Ticker} alt="" />
        </li>
        <li>
          <img src={Ticker} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default MyCoupons;
