import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import Success_gif from "../Assets/gif/payment succesful png.gif";
import { Assets } from "../Assets/Assets";

const Success = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <div className="success">
      {isSuccess && (
        <div className="congrats">
          <img src={Assets.Congrats} alt="" />
        </div>
      )}
      {!isSuccess && (
        <div className="img-gif">
          <img src={Success_gif} alt="" />
        </div>
      )}
      {isSuccess && (
        <div className="tickets">
          <img src={Assets.ticket} alt="" />
          <img src={Assets.ticket} alt="" />
        </div>
      )}

      {isSuccess && (
        <div className="animation-container">
          <div className="star-box">
            <img src={Assets.Star_icon} alt="" />
          </div>
          <div className="circle"></div>
        </div>
      )}
      {isSuccess && <button className="bottom-btn">GET</button>}
    </div>
  );
};

export default Success;
