import { COLOR_PALETTE } from "@/utils/colorPalette";
import { Icon } from "./Icons";

const isExpenseCategory = (category: string) => {
  return !["Income", "Investment", "Credit Card", "Interest"].includes(
    category
  );
};

const getIconSvg = (
  category: string,
  className: string = "w-6 h-6 text-gray-500"
) => {
  const iconType =
    category === "Investment" || category === "Credit Card"
      ? "transfer"
      : category;

  const isExpense = isExpenseCategory(category);
  const bgColor = isExpense ? "bg-red-100/50" : "bg-blue-100/50";
  const iconColor = isExpense ? COLOR_PALETTE.Expense : "text-blue-500";

  return (
    <div
      className={`flex items-center justify-center p-2 rounded-full ${bgColor} ${
        className.includes("w-") ? "" : "w-10 h-10"
      } flex-shrink-0`}
    >
      {/* Pass the category name as the 'type' to the Icon component */}
      <Icon type={iconType} className={`${iconColor} w-5 h-5`} />
    </div>
  );
};

export default getIconSvg;
