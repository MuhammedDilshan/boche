import React, { useState } from "react";
import "./Registration.css";
import { Assets } from "../../Components/Assets/Assets";
import { firestore } from "../../firebase";
import { setDoc, collection, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const otpPage = useNavigate();

  // const timestamp = Date.now().toString();
  // const ref = doc(collection(firestore, "USER"), timestamp);
  // const [formData, setFormData] = useState({
  //   NAME: "",
  //   MOBILE: "",
  //   STATE: "Kerala", // Default state set to Kerala
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await setDoc(ref, formData); // Add 'await' here
  //     alert("User details added successfully!");
  //     setFormData({
  //       NAME: "",
  //       MOBILE: "",
  //       STATE: "Kerala", // Reset state to Kerala after submission
  //     });
  //     otpPage("/otp",{ state: { mobile: formData.MOBILE } });

  //   } catch (error) {
  //     console.error("Error adding user details: ", error);
  //     alert("An error occurred while adding user details. Please try again.");
  //   }
  // };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userState, setUserState] = useState("");
  const [error, setError] = useState("");

  // const db = firebase.firestore();

  const validateForm = () => {
    if (!name.trim() || !phone.trim() || !userState.trim()) {
      alert("All fields are required");
      return false;
    }
    // You can add more specific validations here if needed
    return true;
  };

  const registerUser = async () => {
    if (
      name.trim().length === 0 &&
      phone.trim().length === 0 &&
      userState.trim().length === 0
    ) {
      alert("All fields are required");
    } else {
      const now = new Date();
      const id = now.getTime().toString();

      const regMap = {
        ID: id,
        NAME: name,
        PHONE: phone,
        TYPE: "CUSTOMER",
        REF: `CUSTOMERS/${id}`,
        STATUS: "ACTIVE",
      };

      const cosMap = {
        ID: id,
        NAME: name,
        PHONE: phone,
        STATE: userState,
        DATE: now,
        STATUS: "ACTIVE",
      };
      const ref = doc(collection(firestore, "USERS"), id);
      const ref2 = doc(collection(firestore, "CUSTOMERS"), id);

      try {
        await setDoc(ref, regMap);
        await setDoc(ref2, cosMap);
        console.log("User registered successfully");
        alert("User registered successfully!");
        otpPage("/otp", { state: { mobile: phone } });
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  return (
    <div className="registration">
      <div className="img-box">
        <h5>Registration</h5>
        <p>
          We’ve picked out something special just for you! Check out the app now
          to see what’s waiting.
        </p>
      </div>
      <div className="register-box">
        <input
          type="text"
          placeholder="Full Name"
          name="NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          name="MOBILE"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          name="STATE"
          value={userState}
          onChange={(e) => setUserState(e.target.value)}
        >
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="State">State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <button type="submit" onClick={registerUser} className="reg-b">
          Register
        </button>
        <p>Already have an account?</p>
        <button className="resend">Sign In</button>
      </div>
    </div>
  );
};
