import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import MyCoupons from "../../Components/MyCoupons/MyCoupons";

const Coupons = () => {
  return (
    <div>
      <TopNav title="My Coupons" />
      <MyCoupons />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Coupons;
