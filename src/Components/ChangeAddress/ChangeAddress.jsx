import React from "react";
import "./ChangeAddress.css";
import { Assets } from "../Assets/Assets";

const ChangeAddress = () => {
  return (
    <div>
      <div className="address-lists">
        <div className="address-itemm">
          <form action="">
            <input type="radio" />
          </form>
          <div className="address-boxx">
            <div className="edit-top">
              <div className="location">
                <img src={Assets.Location} alt="" />
              </div>
              <button className="edit">Edit</button>
            </div>
            <p>adress</p>
          </div>
        </div>
        <div className="address-itemm">
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
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;
