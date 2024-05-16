import React from "react";
import "./DeliveryAddress.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import { UserDetails } from "../../Components/UserDetails/UserDetails";

const DeliveryAddress = () => {
  return (
    <div>
      <TopNav title="Address" />
      <UserDetails />
    </div>
  );
};

export default DeliveryAddress;
