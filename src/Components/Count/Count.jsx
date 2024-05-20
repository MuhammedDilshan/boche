import React, { useEffect, useState } from "react";
import "./Count.css";
import { Assets } from "../Assets/Assets";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useCount } from "../../Context/Context";
import { Button } from "../Button/Button";

export const Count = () => {
  const productPrice = localStorage.getItem("productPrice");
  const productImages = localStorage.getItem("productImages");
  const loginUserId = localStorage.getItem("loginUserId");

  console.log(productImages);
  console.log(productPrice);
  console.log("kskhdfgstrgfsyjgdhfksrhkgfhdf");

  const { count, totalPrice, increment, decrement } = useCount();
  const [isMobile, setIsMobile] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const buttonLink =
    loginUserId === "" || loginUserId === null ? "/login" : "/address";

  return (
    <div className="count">
      <div className="tea-number">
        <img src={Assets.Line} alt="" className="round" />
        <img src={productImages} alt="" className="tea" />
      </div>
      <div className="count-box">
        <div className="count-web">
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
        {isMobile && (
          <button
            className="bbttn"
            onClick={() => (window.location.href = buttonLink)}
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};
