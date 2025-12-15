import { FC } from "react";
import { COLOR_PALETTE } from "../../utils/colorPalette";

const CurrencyDisplay: FC<CurrencyDisplayProps> = ({
  amount,
  isIncome = false,
  className = "",
}) => {
  // Determine color class: Red for negative amounts (expenses), Blue-600 for positive.
  // We use a standard Tailwind class ('text-blue-600') here for stability.
  const colorClass =
    amount >= 0 && isIncome ? "text-blue-600" : COLOR_PALETTE.Expense;

  // Determine sign: '+' for positive income, '-' for negative (expense), or empty for zero.
  const sign = amount > 0 && isIncome ? "+" : amount < 0 ? "-" : "";

  // Format amount as currency without decimals for clean display in cards.
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(amount));

  return (
    <>
      <span className={`${colorClass} font-semibold ${className}`}>
        {sign}
        {formattedAmount}
      </span>
    </>
  );
};
