import React, { useState } from "react";
import "./Registration.css";
import { Assets } from "../../Components/Assets/Assets";
import { firestore } from "../../firebase";
import { setDoc, collection, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const timestamp = Date.now().toString();
  const ref = doc(collection(firestore, "USER"), timestamp);
  const [formData, setFormData] = useState({
    NAME: "",
    MOBILE: "",
    STATE: "Kerala", // Default state set to Kerala
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(ref, formData); // Add 'await' here
      alert("User details added successfully!");
      setFormData({
        NAME: "",
        MOBILE: "",
        STATE: "Kerala", // Reset state to Kerala after submission
      });
    } catch (error) {
      console.error("Error adding user details: ", error);
      alert("An error occurred while adding user details. Please try again.");
    }
  };

  return (
    <div className="registration">
      <div className="img-box">
        <img src={Assets.Boche} alt="" />
      </div>
      <div className="register-box">
        <h5>Registration</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="NAME"
            value={formData.NAME}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="MOBILE"
            value={formData.MOBILE}
            onChange={handleChange}
          />
          <select name="STATE" value={formData.STATE} onChange={handleChange}>
            <option value="Kerala">Kerala</option>
          </select>
          <button type="submit" className="reg-b">
            {/* Changed onSubmit to type="submit" */}
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
