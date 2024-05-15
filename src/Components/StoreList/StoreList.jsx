import React from "react";
import "./StoreList.css";
import { IoMdSearch } from "react-icons/io";
import { Assets } from "../Assets/Assets";

const StoreList = () => {
  return (
    <div className="storelist">
      <form action="">
        <input type="text" placeholder="Search District" />
        <div className="search">
          <IoMdSearch />
        </div>
      </form>
      <h6>
        Working Hours: <span>10:00 am - 06:00pm</span>
      </h6>
      <div className="location-list">
        <div className="location">
          <img src={Assets.Locat} alt="" />
          <h6>Eranakulam</h6>
        </div>
        <ul className="sub-locations">
          <li>
            <h5>1. Eranakulam</h5>
            <p>
              Chemmanur Gold Palace International Ltd,GROUND FLOOR,ROYALS
              BUILDING,,ROYAL JUNCTION, PUNALUR ROAD,ANCHAL, KOLLAM-691306,,
            </p>
          </li>
          <li>
            <h5>1. Eranakulam</h5>
            <p>
              Chemmanur Gold Palace International Ltd,GROUND FLOOR,ROYALS
              BUILDING,,ROYAL JUNCTION, PUNALUR ROAD,ANCHAL, KOLLAM-691306,,
            </p>
          </li>
          <li>
            <h5>1. Eranakulam</h5>
            <p>
              Chemmanur Gold Palace International Ltd,GROUND FLOOR,ROYALS
              BUILDING,,ROYAL JUNCTION, PUNALUR ROAD,ANCHAL, KOLLAM-691306,,
            </p>
          </li>
        </ul>
        <div className="location">
          <img src={Assets.Locat} alt="" />
          <h6>Thrissur</h6>
        </div>
        <div className="location">
          <img src={Assets.Locat} alt="" />
          <h6>Palakkad</h6>
        </div>
        <div className="location">
          <img src={Assets.Locat} alt="" />
          <h6>Kzhikoode</h6>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
