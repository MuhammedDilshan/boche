import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import SelectAddress from "../../Components/SelectAddress/SelectAddress";
import { useLocation,useNavigate } from "react-router-dom";

export const Address = () => {
  const location = useLocation();

  console.log(location.state?.productId)
 
  return (
    <div>
      <TopNav title="Address" />
      <SelectAddress />
      <Button title="Submit" page="/payment" />
    </div>
  );
};
