"use client";
import { SkeletonCard } from "@/components/molecules/skeletons/SkeletonCard";
import { CreditCardSingle } from "@/components/organisms/cards/CreditCardSingle";
import { useCardList } from "@/data/useCardList";

import { CreditCardsFeatureProps } from "@/interfaces/CreditCardField";
import { useState } from "react";

const CreditCardsTemplate = ({ cards, noOfCard }: CreditCardsFeatureProps) => {
  const [isLoading, setIsLoading] = useState(false);
  if (!cards || cards.length === 0) {
    return <div>No cards available.</div>;
  }

  return (
    <div className="flex  gap-6 overflow-x-auto overscr ">
      {isLoading
        ? Array.from({ length: noOfCard }).map((_, index) => (
            <SkeletonCard key={index} width="350px" height="200px" />
          ))
        : cards
            .slice(0, noOfCard)
            .map((card) => (
              <CreditCardSingle
                key={card.cardNumber}
                cardHolder={card.cardHolder}
                cardNumber={card.cardNumber}
                currentBalance={card.currentBalance}
                design={card.design}
                expiryDate={card.expiryDate}
              />
            ))}
    </div>
  );
};

export default CreditCardsTemplate;
