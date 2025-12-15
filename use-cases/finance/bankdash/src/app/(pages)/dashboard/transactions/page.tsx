import { useCardList } from "@/data/useCardList";
import React from "react";
import { Text } from "@/components/atoms/Text";
import Link from "next/link";
import Section from "@/components/atoms/Section";
import CreditCardsTemplate from "@/components/templates/CreditCardsTemplate";

const page = () => {
  const CardsList = useCardList();
  const cards = CardsList.cards || [];
  return (
    <>
      <Section>
        <div className="flex gap-6 ">
          <div className="col-span-3">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-2">
                <Text as="h2" className="text-2xl text-raw-dark-blue font-bold">
                  My Cards
                </Text>
                <Link
                  href={""}
                  className="text-base text-raw-dark-blue font-bold"
                >
                  See All
                </Link>
              </div>

              <CreditCardsTemplate cards={cards} noOfCard={2} />
            </div>
          </div>
          <div className="w-[350px]">{/* <ExpenseChartCard /> */}ss</div>
        </div>
      </Section>
      <Section>test</Section>
    </>
  );
};

export default page;
