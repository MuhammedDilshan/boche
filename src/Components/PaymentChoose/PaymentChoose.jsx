import React, { useState } from "react";
import "./PaymentChoose.css";
import { Assets } from "../Assets/Assets";
import { FaAngleRight } from "react-icons/fa6";
import { useCount } from "../../Context/Context";
import { useNavigate } from "react-router";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const PaymentChoose = () => {
  const timestamp = Date.now().toString();
  const ref = doc(collection(firestore, "ORDERS"), timestamp);
  const history = useNavigate();
  const { totalPrice, count } = useCount();
  const [data, setData] = useState({
    ORDER_ID: timestamp,
    PRODUCT_NAME: "irshad",
    PRODUCT_PRICE: "40",
    ORDER_PRICE: totalPrice,
    PRODUCT_QUANTITY: count,
  });

  const handlePaymentOptionClick = async (e) => {
    e.preventDefault();
    try {
      await setDoc(ref, data);
      setData({
        name: "monu",
        gk: "1",
        place: "kkv",
      });
    } catch (error) {
      console.error("Error adding user details: ", error);
    }
    history("/succes");
  };

  return (
    <div className="payment-choose">
      <div className="count-box">
        <h4>{totalPrice}</h4>
        <h6>{count} PKTS X ₹40</h6>
      </div>
      <div className="option-box">
        <h5>Payment Options</h5>
        <ul>
          <li onClick={handlePaymentOptionClick}>
            <img src={Assets.Gpay} alt="" />
          </li>
          <li>
            <img src={Assets.Paytm} alt="" />
          </li>
          <li>
            <img src={Assets.Bhim} alt="" />
          </li>
        </ul>
        <div className="other-box">
          <h6>Other Payment Options</h6>
          <div className="other-payment">
            <span>NEFT</span>
            <FaAngleRight />
          </div>
          <div className="other-payment">
            <span>Bank Transfer</span>
            <FaAngleRight />
          </div>
        </div>
        <p>
          By continuing, you agree to our <span>Terms & Conditions</span>
        </p>
        <p>
          and acknowledge that you have <span>read and accept our Privacy</span>
          Policy.
        </p>
      </div>
    </div>
  );
};

export default PaymentChoose;
