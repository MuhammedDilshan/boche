import React from "react";
import "./Count.css";
import { Assets } from "../Assets/Assets";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCount } from "../../Context/Context";
import { useLocation,useNavigate } from "react-router-dom";

export const Count = () => {
 

  const productPrice = localStorage.getItem('productPrice');
  const productImages = localStorage.getItem('productImages');

  console.log(productImages)
  console.log(productPrice)
  console.log("kskhdfgstrgfsyjgdhfksrhkgfhdf")

  const { count, totalPrice, increment, decrement } = useCount();

  return (
    <div className="count">
      <div className="tea-number">
        <img src={Assets.Line} alt="" className="round" />
        <img src={productImages} alt="" className="tea" />
        <h2>₹ {totalPrice}</h2>
        <h6>
          <span>{count}</span> PKTS X ₹{productPrice}
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
