import React, { useState, useEffect } from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import StoreList from "../../Components/StoreList/StoreList";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";
import HeaderWeb from "../../Components/Header/HeaderWeb";

const Store = () => {
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
    <>
      {isMobile ? <TopNav title="Store List" /> : <HeaderWeb />}
      <StoreList />
      {/* <BottomNav /> */}
    </>
  );
};

export default Store;
