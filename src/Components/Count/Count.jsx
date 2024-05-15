import React from "react";
import "./Count.css";
import { Assets } from "../Assets/Assets";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCount } from "../../Context/Context";

export const Count = () => {
  const { count, totalPrice, increment, decrement } = useCount();

  return (
    <div className="count">
      <div className="tea-number">
        <img src={Assets.Line} alt="" className="round" />
        <img src={Assets.Tea} alt="" className="tea" />
        <h2>₹ {totalPrice}</h2>
        <h6>
          <span>{count}</span> PKTS X ₹40
        </h6>
      </div>
      <div className="couter">
        <div onClick={decrement}>
          <FaMinus />
        </div>
        <p>{count}</p>
        <div onClick={increment}>
          <FaPlus />
        </div>
      </div>
    </div>
  );
};
