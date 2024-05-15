import React, { useState, useEffect } from "react";
import "./SelectAddress.css";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const addressCollection = collection(firestore, "address");
      const snapshot = await getDocs(addressCollection);
      const addressesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAddresses(addressesData);
    };

    fetchAddresses();
  }, []);

  return (
    <div className="select-address">
      {/* Your existing UI */}
      <div className="saved-address">
        <h5>Saved Address</h5>
        {addresses.map((address) => (
          <div className="address-item" key={address.id}>
            {/* Your existing UI */}
            <div className="address-box">
              <div className="edit-top">
                <div className="location">
                  <img src={Assets.Location} alt="" />
                </div>
                <button className="edit">Edit</button>
              </div>
              <h6>{address.name}</h6>
              <p>
                {address.landmark}, {address.locality}, {address.city},{" "}
                {address.state} {address.pincode}
              </p>
            </div>
          </div>
        ))}
        {/* Your existing UI */}
        <Link to="/delivery">
          <button className="new">New Address</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectAddress;
