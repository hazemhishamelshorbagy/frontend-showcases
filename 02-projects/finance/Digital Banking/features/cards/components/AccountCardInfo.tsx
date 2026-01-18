import React from "react";
import { CardBalanceProps } from "../types/cards";
import { Text } from "@/shared-components/common/TextVariant";
const AccountCardInfo: React.FC<CardBalanceProps> = ({
  info,
  infoDesc,
  currency,
  cardLabel,
  cardText,
}) => {
  return (
    <div className="max-w-32 flex flex-col ">
      {infoDesc && (
        <Text variant={"span"} className={cardLabel}>
          {infoDesc}
        </Text>
      )}

      {info && (
        <Text variant="p" className={cardText}>
          {info}

          {currency && ` ${currency}`}
        </Text>
      )}
    </div>
  );
};

export default AccountCardInfo;
