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

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userState, setUserState] = useState('');
  const [error, setError] = useState('');
  
  // const db = firebase.firestore();

  const validateForm = () => {
    if (!name.trim() || !phone.trim() || !userState.trim()) {
      alert('All fields are required');
      return false;
    }
    // You can add more specific validations here if needed
    return true;
  };

  const registerUser = async () => {

    if (name.trim().length===0 && phone.trim().length===0 && userState.trim().length===0) {
      alert('All fields are required');
    }else{

    const now = new Date();
    const id = now.getTime().toString();

    const regMap = {
      ID: id,
      NAME: name,
      PHONE: phone,
      TYPE: 'CUSTOMER',
      REF: `CUSTOMERS/${id}`,
      STATUS: 'ACTIVE'
    };

    const cosMap = {
      ID: id,
      NAME: name,
      PHONE: phone,
      STATE: userState,
      DATE: now,
      STATUS: 'ACTIVE'
    };
    const ref = doc(collection(firestore, "USERS"), id);
    const ref2 = doc(collection(firestore, "CUSTOMERS"), id);


    try {
      await setDoc(ref, regMap);
      await setDoc(ref2, cosMap);
      console.log('User registered successfully');
      alert("User registered successfully!");
      otpPage("/otp",{ state: { mobile: phone } });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
  };


  return (
    <div className="registration">
      <div className="img-box">
        <img src={Assets.Boche} alt="" />
      </div>
      <div className="register-box">
        <h5>Registration</h5>
      
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
          <select name="STATE"
           value={userState} 
           onChange={(e) => setUserState(e.target.value)} >
            <option value="Kerala">Kerala</option>
          </select>
          <button type="submit" onClick={registerUser} className="reg-b">
            {/* Changed onSubmit to type="submit" */}
            Verify
          </button>
      
      </div>
    </div>
  );
};