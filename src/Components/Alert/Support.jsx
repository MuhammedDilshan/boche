import React from "react";
import "./Alert.css";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Support = () => {
  return (
    <div className="support">
      <div className="logout-box">
        <h6>Connect Support Team</h6>
        <p>
          Excellence in helpline services is the heartbeat of user satisfaction
        </p>
        <div className="cancel-btn">
          <button className="calb">
            <IoIosCall />
            Call
          </button>
          <button className="calb">
            <FaWhatsapp />
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
