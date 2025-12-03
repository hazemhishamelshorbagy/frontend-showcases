import { useCardList } from "@/data/useCardList";
import CreditCards from "@/features/dashboard/mycards/CreditCards";
import React from "react";
import { Text } from "@/design-system/Atoms/Text";
import Link from "next/link";
import Section from "@/design-system/Atoms/Section";
import ExpenseChartCard from "@/features/dashboard/charts/ExpenseChart";
const page = () => {
  const CardsList = useCardList();
  const cards = CardsList.cards || [];
  return (
    <>
      <Section>
        <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-4 gap-6 ">
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

              <CreditCards cards={cards} noOfCard={2} />
            </div>
          </div>
          <div className="w-[350px]">
            <ExpenseChartCard />
          </div>
        </div>
      </Section>
      <Section>test</Section>
    </>
  );
};

export default page;
