import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { MyOrders } from "../../Components/MyOrders/MyOrders";

const Orders = () => {
  return (
    <div>
      <TopNav title="My Orders" />
      <MyOrders />
      {/* <BottomNav /> */}
    </div>
  );
};

export default Orders;
