import React, { useState } from "react";
import { Assets } from "../../Components/Assets/Assets";
import "./Otp.css";
import { useLocation,useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { database } from "../../firebase"; 
import { ref, onValue } from 'firebase/database';

const Otp = () => {
  const location = useLocation();
  const { mobile } = location.state || {};
  const [otp, setOtp] = useState(["123456","000000","111111","555555"]);
  const [userOtp, setUserOtp] = useState("");

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "", // Add otp field to the formData
  });
  const [showLoading, setShowLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoading(true);
    const targetKey = mobile;
    const pin = userOtp;

    checkValueForKey(targetKey, pin);

    // Call the function to check for OTP
    // checkValueForKey(mobile, otp);

    // Simulate OTP API call
    setTimeout(() => {
      setShowLoading(false);
      // otpPage("/otp"); // Navigate to OTP page
    }, 2000);
  };

  const navigate = useNavigate();


  const checkValueForKey = async (targetKey, pin) => {
    const fixedOtpRef = ref(database, 'FIXED_OTP');
    onValue(fixedOtpRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        Object.entries(data).forEach(([key, value]) => {
          if (key === targetKey && value === pin) {
            console.log("Key and pin match found!");
            alert("Login Success")

            navigate("/");
            // User authorization logic here
            // You might set a token or perform some navigation

            // Example:
            // localStorage.setItem('appwrite_token', '');
            // localStorage.setItem('phone_number', key);
            // Navigate to another page
            // otpPage("/some-page"); // Replace with actual navigation
          }else{
            alert("Invalid otp")
          }
        });
      } else {
        console.log("No fixed OTPs found.");
      }
    });
  };

  const verifyOtp = () => {
    if (otp.includes(userOtp)) {
      navigate("/");
    }else{
      alert("please Enter valid Otp")
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
        <button className="otp-b" onClick={handleLogin}>
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp;
