import React from "react";
import "./DeliveryAddress.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import { UserDetails } from "../../Components/UserDetails/UserDetails";

const DeliveryAddress = () => {
  return (
    <div>
      <TopNav title="Address" />
      <UserDetails />
      <Button title="Save & Submit" page="/address" />
    </div>
  );
};

export default DeliveryAddress;
