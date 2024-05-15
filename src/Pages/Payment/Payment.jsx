import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import SelectPayment from "../../Components/SelectPayment/SelectPayment";

export const Payment = () => {
  return (
    <div>
      <TopNav title="Payment" />
      <SelectPayment />
    </div>
  );
};
