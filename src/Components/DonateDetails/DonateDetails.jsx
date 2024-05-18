import React, { useState, useEffect } from 'react';
import "./DonateDetails.css";
import Ticket from "../Assets/Images/ticket.png";
import { useLocation,useNavigate } from "react-router-dom";
import fetchOrderCoupons from "./fetchOrderCoupons";

export const DonateDetails = () => {
  const location = useLocation();
  const { orderId, orderDate, orderPrice, productQuantity, status,productImage,productPrice } = location.state || {  };
  const [coupons, setCoupons] = useState([]);
  console.log(productImage,'sdcjhsgjdchgsjcbhjsbc');
  const cusId = localStorage.getItem('loginUserId');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCoupons = await fetchOrderCoupons(cusId, location.state?.orderId);
      setCoupons(fetchedCoupons);
    };

    fetchData();
  }, [cusId, orderId]);

  return (
    <div className="donatedetails">
      <div className="donate-detail-box">
        <div className="donate-amount">
          <div className="top-donate">
            <h6>You Donate to Boche Charity </h6>
            <h6>₹ 50</h6>
          </div>
          <p>Little amount of tea bag going to Boche Charitable trust </p>
        </div>
        <div className="earned-ticket">
          <h6>Tickets Earned</h6>
          <h6>{location.state?.productQuantity}</h6>
        </div>
      </div>
      <div className="price-details">
        <h6>Price Details</h6>
        <div className="price">
          <h6>Product Price</h6>
          <h6>₹ {location.state?.productPrice}</h6>
        </div>
        <div className="price">
          <h6>Items</h6>
          <h6>{location.state?.productQuantity}</h6>
        </div>
        <div className="price">
          <h6>Delivery Charge </h6>
          <h6 className="freee">Free</h6>
        </div>
        <div className="total">
          <h6>Total </h6>
          <h6>₹ {location.state?.orderPrice}</h6>
        </div>
      </div>
      <div className="my-tickets">
        <div className="ticket-top">
          <h6>My Tickets</h6>
          <button>See More</button>
        </div>
        <ul style={{ padding: "0" }}>
        {coupons.map((coupon) => (
          <li>
            <img src={Ticket} alt="" />
          </li>
            ))}
          {/* <li>
            <img src={Ticket} alt="" />
          </li>
          <li>
            <img src={Ticket} alt="" />
          </li> */}
        </ul>
      </div>
    </div>
  );
};
