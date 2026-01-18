import { AccountCard } from "@/features/cards/components/AccountCard";
import { Button } from "@/shared-components/common";
import React from "react";

const page = () => {
  return (
    <>
      <AccountCard
        card_id="1"
        card_number="3778 **** **** 1234"
        currency="KWD"
        cvv="123"
        expiry_date="11/30"
        status="Active"
        themesCardType="Credit"
        card_name="Hazem Hisham"
        current_balance={10000}
      />
    </>
  );
};

export default page;
