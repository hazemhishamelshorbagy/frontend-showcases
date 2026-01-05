"use client";
import React from "react";
import TransactionsTable from "@/components/molecules/TransactionsTable";
import { useTransactionsByTab } from "@/data/useTransaction";

type Filter = "all" | "income" | "expenses" | string;

const TransactionsSection = ({ filter }: { filter: Filter }) => {
  console.log(useTransactionsByTab(filter));
  const filtered = useTransactionsByTab(filter);

  return <TransactionsTable data={filtered} />;
};
export default TransactionsSection;
