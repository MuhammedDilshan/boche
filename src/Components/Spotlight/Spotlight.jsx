import React, { useRef } from "react";
import "./Spotlight.css";
import { MdOutlineCall } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Spotlight = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "MESSAGES");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="spotlight">
      <div className="top-box">
        <h6>
          Welcome to Boche <span>Mart!</span>
        </h6>
        <div className="help">
          <MdOutlineCall />
          <p>Help</p>
        </div>
      </div>
      <form action="" onSubmit={handleSave}>
        <input type="text" placeholder="Enter coupon number" ref={messageRef} />
        <button type="submit">Add</button>
      </form>
      <div className="wallet-show">
        <Link to="/wallet" className="link">
          <p>My Wallet</p>
          <h6>₹ 15,000</h6>
        </Link>
        <div className="deposit">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
