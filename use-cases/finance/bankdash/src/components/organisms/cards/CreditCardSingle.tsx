"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";
import { CreditCardField } from "@/components/molecules/card/CreditCardField";
import { CreditCardProps } from "@/interfaces/CreditCardField";
import { cn } from "@/lib/utils";
import { getCardDesignClasses } from "@/utils/card-design-map";
import Image from "next/image";
import { motion } from "framer-motion";

export function CreditCardSingle({
  cardHolder,
  cardNumber,
  currentBalance,
  expiryDate,
  design,
}: CreditCardProps) {
  const classes = getCardDesignClasses(design);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={cn(
          "w-full min-w-[400px] min-h-[225px] rounded-[25px] border-none shadow-none ",
          classes.container
        )}
      >
        {/* Top Section */}
        <CardHeader className="flex flex-row justify-between items-start pt-6 px-6 pb-2">
          <div>
            <p className={cn("text-xs mb-1", classes.label)}>Balance</p>
            <CardTitle className={cn("text-xl font-bold", classes.text)}>
              {currentBalance}
            </CardTitle>
          </div>

          <div className="w-8 h-8">
            <Image src={classes.image} width={32} height={32} alt="icon" />
          </div>
        </CardHeader>

        {/* Middle Section */}
        <CardContent className="px-6 py-6 flex gap-12">
          <CreditCardField
            label="Card Holder"
            value={cardHolder}
            labelClassName={classes.label}
            valueClassName={classes.text}
          />
          <CreditCardField
            label="Valid Thru"
            value={expiryDate}
            labelClassName={classes.label}
            valueClassName={classes.text}
          />
        </CardContent>

        {/* Bottom Section */}
        <div
          className={cn(
            "px-6 py-4 flex justify-between items-center rounded-b-[25px]",
            classes.container
          )}
        >
          <span className={cn("font-mono text-lg", classes.text)}>
            {cardNumber}
          </span>

          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-white/50" />
            <div className="w-6 h-6 rounded-full bg-white/50" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
