import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
// import Donate from "../../Components/Donate/Donate";
import ConfirmedOrder from "../../Components/ConfirmedOrder/ConfirmedOrder";
import { DonateDetails } from "../../Components/DonateDetails/DonateDetails";
import { useLocation } from "react-router-dom";

const Summery = () => {
  const location = useLocation();
  
  console.log(location)
  // console.log(order.orderPrice)
  return (
    <div>
      <TopNav title="Purchase Summary" />
      {/* <Donate /> */}
      <ConfirmedOrder />
      <DonateDetails />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Summery;
