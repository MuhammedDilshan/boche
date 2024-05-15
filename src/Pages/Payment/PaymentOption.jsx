import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import PaymentChoose from "../../Components/PaymentChoose/PaymentChoose";

const PaymentOption = () => {
  return (
    <div>
      <TopNav title="Payment" />
      <PaymentChoose />
    </div>
  );
};

export default PaymentOption;
