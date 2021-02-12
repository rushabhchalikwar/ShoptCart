import React from "react";
import StepProcess from "./StepProcess";
import WarningMessage from "./WarningMessage";

const Payment = () => {
  return (
    <div>
      <StepProcess stepNumber="2" />
      <WarningMessage
        header="Payment coming soon"
        description="choose COD option"
      />
      <button className="ui primary button">Place order</button>
    </div>
  );
};

export default Payment;
