import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import WithdrawDetails from "../../Components/WithdrawDetails/WithdrawDetails";

const Withdraw = () => {
  return (
    <>
      <TopNav title="Withdraw" />
      <WithdrawDetails />
      <Button title="Withdraw Now" />
    </>
  );
};

export default Withdraw;
