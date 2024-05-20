import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import SelectPayment from "../../Components/SelectPayment/SelectPayment";
// import { Button } from "../../Components/Button/Button";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

export const Payment = () => {
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
      <SelectPayment />
      {/* <Button title="Place Order" /> */}
    </div>
  );
};
