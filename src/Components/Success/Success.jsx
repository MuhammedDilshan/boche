import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css";
import Success_gif from "../Assets/gif/payment succesful png.gif";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="success">
      <div className="img-gif">
        <img src={Success_gif} alt="" />
      </div>
    </div>
  );
};

export default Success;
