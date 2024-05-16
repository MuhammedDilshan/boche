import React, { useState } from "react";
import "./Login.css";
import { Assets } from "../../Components/Assets/Assets";
import { FaAngleLeft } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const otpPage = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getOtpApi = async () => {
    setShowLoading(true);
    try {
      const min = 100000;
      const max = 999999;
      //   const rNum = min + Math.floor(Math.random() * (max - min));
      const rNum = "123456";

      otpPage("/otp");

      // const response = await axios.get(
      //   `http://sapteleservices.com/SMS_API/sendsms.php`,
      //   {
      //     params: {
      //       username: "spinecodes",
      //       password: "1210212102",
      //       mobile: formData.mobile,
      //       message: `OTP for your mobile number verification is ${rNum}\nSpinecodes`,
      //       sendername: "SPINEO",
      //       UC: "U",
      //       routetype: "1",
      //       tid: "1707170693815254163",
      //     },
      //   }
      // );

      // console.log(response, "=====================response");

      // if (response.status === 200) {
      //   console.log("dilsha");
      //   setShowLoading(false);
      //   alert("OTP sent to phone successfully");
      //   otpPage("/otp"); // Navigate to OTP page
      // }
    } catch (e) {
      console.log("catch======================");
      otpPage("/otp");
      setShowLoading(false);
      setError("Failed to send OTP. Please try again later.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    getOtpApi(); // Call getOtpApi function
  };

  return (
    <div className="login">
      <FaAngleLeft />
      <div className="img-box">
        <img src={Assets.Boche} alt="" />
      </div>
      <div className="login-box">
        <h5>Login</h5>
        <form onSubmit={handleLogin}>
          <input
            type="tel"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            minLength={10}
            maxLength={10}
            pattern="[0-9]{10}"
            required
          />
          <button type="submit" className="log-b">
            Login
          </button>
        </form>
        <p>Don’t You Have Account ?</p>
        <button className="reg">Register</button>
      </div>
    </div>
  );
};
