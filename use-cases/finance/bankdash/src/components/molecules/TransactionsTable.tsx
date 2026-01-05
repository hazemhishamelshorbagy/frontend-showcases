import { Transaction } from "@/interfaces/Transaction";
import React from "react";
import { Text } from "@/components/atoms/Text";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../organisms/tables/Table";
import { checkTransactionState } from "@/utils/checkTransactionState.map";
import { Badge } from "../atoms/Badge";
import { checkTransactionTypeSign } from "@/utils/checkTransactionTypeSign";

type TransactionsTableProps = {
  data: Transaction[] | any[];
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No transactions found.</div>;
  }

  return (
    <Table className="bg-white  overflow-hidden rounded-2xl w-full">
      <TableHeader>
        <TableRow className="border-b-[1px] !text-[#718EBF] font-medium hover:bg-transparent  border-b-[#EBEEF2]  ">
          <TableHead>Description</TableHead>
          <TableHead>Transaction ID</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((txn: Transaction) => (
          <TableRow
            className="border-b-[1px]  border-b-[#EBEEF2]  "
            key={txn.id}
          >
            <TableCell>{txn.description}</TableCell>
            <TableCell>{txn.id}</TableCell>
            <TableCell>{txn.category}</TableCell>
            <TableCell>{txn.type}</TableCell>
            <TableCell>{txn.date}</TableCell>
            <TableCell>
              {" "}
              <Text
                as="span"
                className={`font-light text-${
                  checkTransactionTypeSign(txn.type).textColor
                }`}
              >
                {checkTransactionTypeSign(txn.type).sign} ${txn.amount}
              </Text>
            </TableCell>
            <TableCell>
              <Badge
                variant={"outline"}
                className={` bg-${
                  checkTransactionState(txn.status).stateColor
                }   px-2 py-1 font-light  border-0 items-center rounded-3xl`}
              >
                <Text as="span" className="font-light text-white">
                  {checkTransactionState(txn.status).text}
                </Text>
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
