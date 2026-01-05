// components/templates/FinanceTemplate.tsx
import TransactionsSection from "@/components/organisms/TransactionsSection";
import { TabList } from "../organisms/TabsList/tabList";
import { Text } from "@/components/atoms/Text";
export default function FinanceTemplate() {
  return (
    <div className="w-full flex gap-6 flex-col">
      <Text as="h2" className="text-2xl text-raw-dark-blue font-bold">
        Recent Transactions
      </Text>

      <TabList
        className="flex gap-6 flex-col"
        defaultValue="all"
        tabs={[
          {
            label: "All Transactions",
            value: "all",
            content: <TransactionsSection filter="all" />,
          },
          {
            label: "Income",
            value: "income",
            content: <TransactionsSection filter="income" />,
          },
          {
            label: "Expenses",
            value: "expenses",
            content: <TransactionsSection filter="expenses" />,
          },
        ]}
      />
    </div>
  );
}
