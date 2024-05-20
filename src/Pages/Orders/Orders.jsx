import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { MyOrders } from "../../Components/MyOrders/MyOrders";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Orders = () => {
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
  return (
    <div>
      {isMobile ? <TopNav title="My Orders" /> : <HeaderWeb />}
      <MyOrders />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Orders;
