import React, { useState, useEffect } from "react";
import "./ChangeAddress.css";
import { Assets } from "../Assets/Assets";
import fetchAddress from "./fetchAddress";
import AddressModel from "../../ModelClasses/AddressModel";

const ChangeAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const cusId = localStorage.getItem("loginUserId");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAddresses = await fetchAddress(cusId);
      setAddresses(fetchedAddresses);
      if (fetchedAddresses.length > 0) {
        setSelectedAddress(fetchedAddresses[0].id);
      }
    };

    fetchData();
  }, [cusId]);

  const handleRadioChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div className="change-addres">
      <div className="address-lists">
        {addresses.map((address) => (
          <div className="address-itemm">
            <form action="">
              <input
                type="radio"
                value={address.id}
                checked={selectedAddress === address.id}
                onChange={handleRadioChange}
              />
            </form>
            <div className="address-boxx">
              <div className="edit-top">
                <div className="location">
                  <img src={Assets.Location} alt="" />
                </div>
                <button className="edit">Edit</button>
              </div>
              <p>{address.userName}</p>
              <p>
                {address.userMobile},{address.userLandMark},{" "}
                {address.userLocality},{address.userCity}, {address.userState},
                {address.userPinCode}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="address-itemm">
          <input type="radio" />
          <div className="address-boxx">
            <div className="edit-top">
              <div className="location">
                <img src={Assets.Location} alt="" />
              </div>
              <button className="edit">Edit</button>
            </div>
            <p>hello @ kalikavu po kalikavu malappura</p>
          </div>
        </div> */}
      </div>
      <button className="change-bbtn">Change Address</button>
    </div>
  );
};

export default ChangeAddress;
