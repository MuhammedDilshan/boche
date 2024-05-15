import React, { useState } from "react";
import "./UserDetails.css";
import { firestore } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export const UserDetails = () => {
  const ref = collection(firestore, "address");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    landmark: "",
    locality: "",
    city: "",
    pincode: "",
    state: "Kerala",
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
        landmark: "",
        locality: "",
        city: "",
        pincode: "",
        state: "Kerala",
      });
    } catch (error) {
      console.error("Error adding user details: ", error);
      alert("An error occurred while adding user details. Please try again.");
    }
  };

  return (
    <div className="userdetails">
      <div className="user-box">
        <h5>Delivery Address</h5>
        <form action="" onSubmit={handleSubmit}>
          <div className="formbox">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="pincode">PIN Code</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="formbox">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="Kerala">Kerala</option>
              <option value="Punjab">Punjab</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
