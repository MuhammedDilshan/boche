import React from "react";
import "./AccoutDetails.css";

const AccoutDetails = () => {
  return (
    <div className="accout-details">
      <h5>Add New Account Details</h5>
      <form action="">
        <input type="text" placeholder="Account Name" />
        <input type="text" placeholder="Account Holder Name" />
        <input type="number" placeholder="Account Number" />
        <input type="number" placeholder="Confirm Account Number" />
        <input type="text" name="" id="" placeholder="IFSC Code" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AccoutDetails;
