import { Card } from "@/design-system/Atoms/Card";
import ChartType from "@/design-system/Molecules/Chart";
import ExpenseChart from "@/design-system/Organisms/charts/ExpenseChart";
import prepareChartDataExpenses from "@/utils/prepareChartDataExpenses";
import { FC } from "react";

const ExpenseChartCard: FC<ExpenseChartProps> = () => {
  return <ExpenseChart />;
};
export default ExpenseChartCard;
