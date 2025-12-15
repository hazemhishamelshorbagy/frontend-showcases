import { Label } from "@/components/atoms/Label";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils"; // standard shadcn utility for class names

interface CreditCardFieldProps {
  label: string;
  value: string;
  labelClassName: string;
  valueClassName: string;
}

export function CreditCardField({
  label,
  value,
  labelClassName,
  valueClassName,
}: CreditCardFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {/* Atom 1: Label */}
      <Label className={cn("text-xs uppercase", labelClassName)}>{label}</Label>

      {/* Atom 2: Value */}
      <Text as="span" className={cn("text-xl font-semibold", valueClassName)}>
        {value}
      </Text>
    </div>
  );
}
