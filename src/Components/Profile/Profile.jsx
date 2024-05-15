import React from "react";
import "./Profile.css";
import { FaChevronLeft } from "react-icons/fa6";
import Yakob from "../Assets/Images/yakoob.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-box">
        <h6>Profile</h6>
        <FaChevronLeft />
      </div>
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
  );
};

export default Profile;
