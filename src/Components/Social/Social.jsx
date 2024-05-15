import React from "react";
import "./Social.css";
import { Assets } from "../Assets/Assets";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineWifiTethering } from "react-icons/md";
import { TbAirConditioningDisabled } from "react-icons/tb";

export const Social = () => {
  return (
    <div className="social">
      <h6>Boche Social Links</h6>
      <ul className="media">
        <li>
          <img src={Assets.Instagram} alt="" />
        </li>
        <li>
          <img src={Assets.Facebook} alt="" />
        </li>
        <li>
          <img src={Assets.Youtube} alt="" />
        </li>
        <li>
          <img src={Assets.Snapchat} alt="" />
        </li>
        <li>
          <img src={Assets.twitter} alt="" />
        </li>
      </ul>
      <ul className="condition">
        <li>
          <MdOutlinePrivacyTip />
          Privacy Policy
        </li>
        <li>
          <TbAirConditioningDisabled />
          Terms and Condition
        </li>
        <li>
          <MdOutlineWifiTethering />
          Contact Us
        </li>
      </ul>
    </div>
  );
};
