import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import MyDeposit from "../../Components/MyDeposit/MyDeposit";

const Deposit = () => {
  return (
    <>
      <TopNav title="Deposit" />
      <MyDeposit />
      <Button title="Pay Now" />
    </>
  );
};

export default Deposit;
