import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
// import Donate from "../../Components/Donate/Donate";
import ConfirmedOrder from "../../Components/ConfirmedOrder/ConfirmedOrder";
import { DonateDetails } from "../../Components/DonateDetails/DonateDetails";
import { useLocation } from "react-router-dom";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Summery = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(location);
  // console.log(order.orderPrice)
  return (
    <div>
      {isMobile ? <TopNav title="Purchase Summary" /> : <HeaderWeb />}
      {/* <Donate /> */}
      <ConfirmedOrder />
      <DonateDetails />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Summery;
