import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import MyCoupons from "../../Components/MyCoupons/MyCoupons";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Coupons = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isMobile ? <TopNav title="My Coupons" /> : <HeaderWeb />}
      <MyCoupons />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Coupons;
