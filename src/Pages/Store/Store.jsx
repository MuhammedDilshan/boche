import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import StoreList from "../../Components/StoreList/StoreList";

const Store = () => {
  return (
    <>
      <TopNav title="Store List" />
      <StoreList />
    </>
  );
};

export default Store;
