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
  const { totalPrice, count } = useCount();
  const id = Date.now().toString();
  const cusId = localStorage.getItem('loginUserId');
  const proId = localStorage.getItem('productId');
  const proImg = localStorage.getItem('productImages');
  const cusName = localStorage.getItem('loginUserName');
  const proQty = count;
  const proPrice = localStorage.getItem('productPrice');
  const selectedOption = "";
  const lastUsedDeliveryName = "";
  const lastUsedDeliveryAddress = "";
  const lastUsedDeliveryNumber = "";
  const orderPrice = count*proPrice;
  const ref = doc(collection(firestore, "ORDERS"), timestamp);
  const history = useNavigate();
  
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


  const status = "SUCCESS";
  const app = "G-PAY";
  const amount = 40;


  const upiPayment = async () => {


    const paymentMap = {
      ORDER_ID: id,
      COSTUMER_ID: cusId,
      PRODUCT_ID: proId,
      COSTUMER_NAME: cusName,
      ORDER_DATE: new Date(),
      PAYMENT_STATUS:status,
      AMOUNT:amount
    };

    try {
      await setDoc(doc(firestore, "WEB_ATTEMPTS", id), paymentMap, { merge: true });
      console.log("Attempt added successfully with merge!");
    } catch (error) {
      console.error("Error adding attempt: ", error);
    }

    if(status === "SUCCESS"){
    await addOrders();
      history("/succes");
      // alert("Order Confirmed")
    }else{
      alert("payment failed")
    }

  }



  const addOrders = async () => {
    const orderMap = {
      ORDER_ID: id,
      COSTUMER_ID: cusId,
      PRODUCT_ID: proId,
      COSTUMER_NAME: cusName,
      ORDER_DATE: new Date(),
      PRODUCT_IMAGE: proImg,
      PRODUCT_QUANTITY: proQty,
      PRODUCT_PRICE: proPrice,
      ORDER_PRICE: orderPrice,
      STATUS: "CONFIRMED",
    };
  
    if (selectedOption !== "Pick Up From Store") {
      orderMap.DELIVERY_NAME = lastUsedDeliveryName;
      orderMap.DELIVERY_NUMBER = lastUsedDeliveryNumber;
      orderMap.DELIVERY_ADDRESS = lastUsedDeliveryAddress;
      orderMap.TYPE = "Home Delivery";
    }else{
      orderMap.TYPE = "Pick Up From Store";
    }
  
    const coupons = [];
  
    for (let i = 0; i < proQty; i++) {
      const couponId = Date.now().toString();
  
      const couponMap = {
        COUPON_ID: couponId,
        COSTUMER_ID: cusId,
        COSTUMER_NAME: cusName,
        COSTUMER_PHONE: couponId,
        ORDER_ID: id,
        STATUS: "PENDING",
      };
  
      await setDoc(doc(firestore, "COUPONS", couponId), couponMap, { merge: true });
      coupons.push(couponId);
    }
  
    // Optionally include coupons array in the orderMap if needed
    // orderMap.COUPONS = coupons;
  
    await setDoc(doc(firestore, "ORDERS", id), orderMap, { merge: true });
    
  };





  return (
    <div className="payment-choose">
      <div className="count-box">
        <h4>{totalPrice}</h4>
        <h6>{count} PKTS X ₹{proPrice}</h6>
      </div>
      <div className="option-box">
        <h5>Payment Options</h5>
        <ul>
          <li onClick={upiPayment}>
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
