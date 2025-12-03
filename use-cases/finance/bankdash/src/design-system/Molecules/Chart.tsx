"use client";
import { FC } from "react";
import Chart from "react-apexcharts";

const ChartType: FC<ChartProps> = ({
  options,
  series,
  typeChart = "line",
  height,
}) => {
  return (
    <Chart height={height} options={options} series={series} type={typeChart} />
  );
};

export default ChartType;
