import React from "react";
import { TopNav } from "../../Components/TopNav/TopNav";
import { Button } from "../../Components/Button/Button";
import SelectAddress from "../../Components/SelectAddress/SelectAddress";

export const Address = () => {
  return (
    <div>
      <TopNav title="Address" />
      <SelectAddress />
      <Button title="Submit" page="/payment" />
    </div>
  );
};
