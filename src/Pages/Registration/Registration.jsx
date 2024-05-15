import React, { useState } from "react";
import "./Registration.css";
import { Assets } from "../../Components/Assets/Assets";
import { firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const Registration = () => {
  const ref = collection(firestore, "user");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    state: "Kerala", // Default state set to Kerala
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
      await addDoc(ref, formData); // Add 'await' here
      alert("User details added successfully!");
      setFormData({
        name: "",
        mobile: "",
        state: "Kerala", // Reset state to Kerala after submission
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
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="Kerala">Kerala</option>
          </select>
          <button type="submit" className="reg-b">
            {" "}
            {/* Changed onSubmit to type="submit" */}
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
