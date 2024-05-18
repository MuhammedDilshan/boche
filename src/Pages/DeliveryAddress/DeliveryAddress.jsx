import React from "react";
import "./DeliveryAddress.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import { UserDetails } from "../../Components/UserDetails/UserDetails";
import { useLocation,useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const location = useLocation();
  const { frmId, toId } = location.state || { frmId: "", toId: "" };

    console.log(location.state?.frmId)

  return (
    <div>
      <TopNav title="Address" />
      <UserDetails frmId={location.state?.frmId} toId={location.state?.toId}/>
    </div>
  );
};

export default DeliveryAddress;
