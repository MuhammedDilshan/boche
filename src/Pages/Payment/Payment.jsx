import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import SelectPayment from "../../Components/SelectPayment/SelectPayment";
import { Button } from "../../Components/Button/Button";

export const Payment = () => {
  return (
    <div>
      <TopNav title="Payment" />
      <SelectPayment />
      <Button title="Place Order" />
    </div>
  );
};
