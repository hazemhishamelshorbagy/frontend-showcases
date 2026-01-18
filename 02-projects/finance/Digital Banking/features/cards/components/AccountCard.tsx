import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
} from "@/shared-components/common";

import React from "react";
import { CardProps } from "../types/cards";
import { getThemesCard } from "@/utils/getThemesCard";
import AccountCardInfo from "./AccountCardInfo";
import Image from "next/image";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const AccountCard: React.FC<CardProps> = ({
  card_id,
  card_number,
  card_name,
  currency,
  expiry_date,
  onClick,
  status,
  themesCardType,
  daily_spending_limit,
  current_balance,
}) => {
  const cardClassTheme = getThemesCard(themesCardType);
  return (
    <Card id={card_id} className={cardClassTheme.classTheme}>
      <CardHeader className="flex justify-between items-center">
        <AccountCardInfo
          cardLabel={cardClassTheme.cardLabel}
          cardText={cardClassTheme.cardText}
          info={current_balance ? current_balance : daily_spending_limit}
          infoDesc={"Balance"}
          currency={currency}
        />
        <Image
          src={cardClassTheme.chipImage}
          alt={cardClassTheme.cardText}
          width={34}
          height={35}
        />
      </CardHeader>
      <CardContent className=" flex justify-between">
        <AccountCardInfo
          cardLabel={cardClassTheme.cardLabel}
          cardText={cardClassTheme.cardText}
          info={card_name}
          infoDesc={"Card Holder"}
        />
        <AccountCardInfo
          cardLabel={cardClassTheme.cardLabel}
          cardText={cardClassTheme.cardText}
          info={expiry_date}
          infoDesc={"VALID THRU"}
        />
      </CardContent>
      <CardFooter
        className={clsx(
          themesCardType === "Credit"
            ? "border-color-bankdash-card-secondary"
            : "border-white",
          "border-t p-0 [.border-t]:pt-4"
        )}
      >
        <div className="px-6 flex w-full justify-between">
          <Text variant="h4" className={cardClassTheme.cardTextNumber}>
            {card_number}
          </Text>
          <Image
            src={cardClassTheme.logoCard}
            alt={cardClassTheme.cardText}
            width={34}
            height={35}
          />
        </div>
      </CardFooter>
    </Card>
  );
};
