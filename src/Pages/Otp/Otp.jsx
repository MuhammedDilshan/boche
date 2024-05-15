import React, { useState } from "react";
import { Assets } from "../../Components/Assets/Assets";
import "./Otp.css";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otp, setOtp] = useState("123456");
  const [userOtp, setUserOtp] = useState("");

  const navigate = useNavigate();

  const verifyOtp = () => {
    if (otp === userOtp) {
      navigate("/");
    }
  };
  return (
    <div className="otp">
      <div className="img-box">
        <img src={Assets.Boche} alt="" />
      </div>
      <h6>
        OTP Verification <span>!</span>
      </h6>
      <div className="otp-box">
        <p>
          Enter the <span>OTP Code</span> send to
        </p>
        <p>+91 98765 43210</p>
        <form action="">
          <OtpInput
            value={userOtp}
            onChange={setUserOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} className="number" />}
          />
        </form>
        <p>
          Didn't receive a code?<span> 0:30</span>
        </p>
        <button className="resend">Resend OTP</button>
        <button className="otp-b" onClick={verifyOtp}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp;
