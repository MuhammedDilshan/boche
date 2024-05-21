import React from "react";
import "./Alert.css";

const Logout = () => {
  return (
    <div className="logout">
      <div className="logout-box">
        <h6>Confirm logout</h6>
        <p>Are you sure want to log out?</p>
        <div className="cancel-btn">
          <button className="cancel">Cancel</button>
          <button className="ok">OK</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
