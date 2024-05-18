import React, { useState } from "react";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { Home } from "../Home/Home";
import Coupons from "../Coupons/Coupons";
import Orders from "../Orders/Orders";
import Store from "../Store/Store";
import Transactions from "../Transactions/Transactions";

const BottomNavFixed = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />;
      case "coupen":
        return <Coupons />;
      case "order":
        return <Orders />;
      case "store":
        return <Store />;
      case "transactions":
        return <Transactions />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      {renderScreen()}
      <BottomNav
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </>
  );
};

export default BottomNavFixed;
