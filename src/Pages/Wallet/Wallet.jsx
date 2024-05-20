import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
// import { Button } from "../../Components/Button/Button";
import { MyWallet } from "../../Components/MyWallet/MyWallet";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Wallet = () => {
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
    <>
      {isMobile ? <TopNav title="My Wallet" /> : <HeaderWeb />}
      <MyWallet />
      {/* <Button title="Withdraw Now" /> */}
    </>
  );
};

export default Wallet;
