import React, { useState } from "react";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { Home } from "../Home/Home";
import Coupons from "../Coupons/Coupons";
import Orders from "../Orders/Orders";
import Store from "../Store/Store";
import Transactions from "../Transactions/Transactions";
import { useLocation,useNavigate } from "react-router-dom";

const BottomNavFixed = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const location = useLocation();
  

  console.log(location.state?.productId)
  console.log(location.state?.productImages)
  console.log(location.state?.productPrice)
  // console.log(navigator)

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home productImages={location.state?.productImages} productPrice={location.state?.productPrice} />;
      case "coupen":
        return <Coupons />;
      case "order":
        return <Orders />;
      case "store":
        return <Store />;
      case "transactions":
        return <Transactions />;
      default:
        return <Home productImages={location.state?.productImages} productPrice={location.state?.productPrice}/>;
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
