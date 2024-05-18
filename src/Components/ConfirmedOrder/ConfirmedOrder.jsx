import React from "react";
import "./ConfirmedOrder.css";
import { Assets } from "../Assets/Assets";
import { MdDone } from "react-icons/md";
import { useLocation,useNavigate } from "react-router-dom";

const ConfirmedOrder = () => {
  const location = useLocation();
  const { orderId, orderDate, orderPrice, productQuantity, status,productImage,productPrice } = location.state || {  };
  
  return (
    <div className="confirmedorder">
      <div className="top-tea">
        <div className="tea-left-top">
          <img src={location.state?.productImage} alt="" />
        </div>
        <div className="tea-top-total">
          <h6>{location.state?.productQuantity} PKTS X ₹{location.state?.productPrice}</h6>
          <p>{(location.state?.productQuantity)/10}Kg</p>
          <p>{location.state?.productQuantity} PKTS X ₹{location.state?.productPrice}</p>
          <h5>₹{location.state?.orderPrice}</h5>
        </div>
      </div>
      <div className="confirmed-details">
        <div className="detail-box">
          <div className="left-line">
            <div className="tick">
              <MdDone />
            </div>
            <div className="line"></div>
          </div>
          <div className="right-detail">
            <h6>Order Confirmed, 1pril 15, 2024</h6>
            <p>Your order has been placed.</p>
            <span>Tue, 16th Apr - 10:05 am</span>
            <p>Your item has been picked up by courier partner</p>
            <span>Tue, 16th Apr - 10:05 am</span>
          </div>
        </div>
        <div className="detail-box">
          <div className="left-line">
            <div className="tick">
              <MdDone />
            </div>
            <div className="line"></div>
          </div>
          <div className="right-detail">
            <h6>Shipped, 1pril 15, 2024</h6>
            <p>Your order has been Shipped.</p>
            <span>Tue, 16th Apr - 10:05 am</span>
          </div>
        </div>
        <div className="detail-box">
          <div className="left-line">
            <div className="tick">
              <MdDone />
            </div>
            <div className="line"></div>
          </div>
          <div className="right-detail">
            <h6>Delivered on April 20, 2024</h6>
            <p>Your order has been Delivered.</p>
            <span>Sat, 20th Apr - 12:05 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedOrder;
