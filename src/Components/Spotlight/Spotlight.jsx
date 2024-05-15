import React, { useRef } from "react";
import "./Spotlight.css";
import { MdOutlineCall } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Spotlight = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

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
        <input
          type="text"
          placeholder="Scan add coupon to your Coupons"
          ref={messageRef}
        />
        <button type="submit">
          <FaPlus />
          Scan QR
        </button>
      </form>
      <div className="wallet-show">
        <Link to="/wallet" className="link">
          <p>
            <CiWallet />
            My Wallet - <span>₹800</span>
          </p>
        </Link>
        <div className="deposit">
          <Link to="/deposit" className="link">
            <GiReceiveMoney />
            Deposit
          </Link>
        </div>
      </div>
    </div>
  );
};
