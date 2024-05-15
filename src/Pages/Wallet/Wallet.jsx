import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import { MyWallet } from "../../Components/MyWallet/MyWallet";

const Wallet = () => {
  return (
    <>
      <TopNav title="My Wallet" />
      <MyWallet />
      <Button title="Withdraw Now" />
    </>
  );
};

export default Wallet;
