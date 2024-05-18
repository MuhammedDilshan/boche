import React from "react";
import "./Profile.css";
import { FaChevronLeft } from "react-icons/fa6";
import Yakob from "../Assets/Images/yakoob.svg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    document.body.classList.remove("modal-active", "overflow-hidden");
  };

  const loginUserPhone = localStorage.getItem('loginUserPhone');
  const loginUserName = localStorage.getItem('loginUserName');
  const loginUserPhoto = localStorage.getItem('loginUserPhoto');
  const loginUserPlace = localStorage.getItem('loginUserPlace');

  const handleClearLocalStorage = () => {
    localStorage.clear();
    navigator("/login");
    console.log("Local storage cleared!");
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
            <img src={loginUserPhoto === ""||loginUserPhoto === undefined ?Yakob:loginUserPhoto} alt="" />
          </div>
          <h5>{loginUserName}</h5>
          <p>{loginUserPhone}</p>
          <p>{loginUserPlace}</p>
        </div>
        <div className="btns">
          <button onClick={handleClearLocalStorage} className="out">Log out</button>
          <button className="edit">Edit</button>
        </div>
      </div>

      <div className="overlay" onClick={handleClick}></div>
    </div>
  );
};

export default Profile;
