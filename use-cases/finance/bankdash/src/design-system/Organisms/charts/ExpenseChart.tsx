"use client";
import { Card } from "@/design-system/Atoms/Card";
import ChartType from "@/design-system/Molecules/Chart";
import prepareChartDataExpenses from "@/utils/prepareChartDataExpenses";
import { FC } from "react";

const ExpenseChart: FC<ExpenseChartProps> = ({ data }) => {
  const { series, options } = prepareChartDataExpenses(data || []);
  return (
    <Card className="p-4">
      <ChartType
        options={options}
        series={series}
        typeChart="line"
        height="300"
      />
    </Card>
  );
};
export default ExpenseChart;
