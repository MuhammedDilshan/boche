import React from "react";
import "./Profile.css";
import { FaChevronLeft } from "react-icons/fa6";
import Yakob from "../Assets/Images/yakoob.svg";

const Profile = () => {
  const handleClick = () => {
    document.body.classList.remove("modal-active", "overflow-hidden");
  };
  return (
    <div className="profile">
      <div className="profile-box">
        <h6>Profile</h6>
        <span onClick={handleClick}>
          <FaChevronLeft />
        </span>
      </div>
      <div className="bottom">
        <div className="profile-details">
          <div className="user-image">
            <img src={Yakob} alt="" />
          </div>
          <h5>Yahkoob Saheer KP</h5>
          <p>9876543210</p>
          <p>Malappuram</p>
        </div>
        <div className="btns">
          <button className="out">Log out</button>
          <button className="edit">Edit</button>
        </div>
      </div>

      <div className="overlay" onClick={handleClick}></div>
    </div>
  );
};

export default Profile;
