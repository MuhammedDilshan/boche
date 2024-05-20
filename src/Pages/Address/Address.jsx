import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import SelectAddress from "../../Components/SelectAddress/SelectAddress";
import { useLocation, useNavigate } from "react-router-dom";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

export const Address = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  console.log(location.state?.productId);
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
      <SelectAddress />
      {/* <Button title="Submit" page="/payment" /> */}
    </div>
  );
};
