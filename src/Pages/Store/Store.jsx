import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import StoreList from "../../Components/StoreList/StoreList";
// import { BottomNav } from "../../Components/BottomNav/BottomNav";

const Store = () => {
  return (
    <>
      <TopNav title="Store List" />
      <StoreList />
      {/* <BottomNav /> */}
    </>
  );
};

export default Store;
