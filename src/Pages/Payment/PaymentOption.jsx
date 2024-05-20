import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import PaymentChoose from "../../Components/PaymentChoose/PaymentChoose";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

const PaymentOption = () => {
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
      {isMobile ? <TopNav title="Address" /> : <TopnavWeb />}
      <PaymentChoose />
    </div>
  );
};

export default PaymentOption;
