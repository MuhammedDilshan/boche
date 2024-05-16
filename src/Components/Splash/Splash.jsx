import React, { useEffect } from "react";
import "./Splash.css";
import { Assets } from "../Assets/Assets";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div className="splash">
      <div className="boche-splash">
        <img src={Assets.Splash} alt="" />
      </div>
      <div className="nuerospine">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Splash;
