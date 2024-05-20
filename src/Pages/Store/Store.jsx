import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import StoreList from "../../Components/StoreList/StoreList";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";

const Store = () => {
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
      {isMobile ? <TopNav title="Store List" /> : <TopnavWeb />}
      <StoreList />
      {/* <BottomNav /> */}
    </>
  );
};

export default Store;
