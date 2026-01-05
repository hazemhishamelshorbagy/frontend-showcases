"use client";

import { useState } from "react";
import { Text } from "@/components/atoms/Text";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";

export function TabList({
  tabs,
  defaultValue,
  className = "w-full",
}: {
  tabs: { label: string; value: string; content: React.ReactNode }[];
  defaultValue?: string;
  className?: string;
}) {
  const initialValue = defaultValue || tabs[0]?.value;
  const [value, setValue] = useState(initialValue);

  return (
    <Tabs.Root value={value} onValueChange={setValue} className={className}>
      {/* Tabs Header */}
      <Tabs.List className="relative flex gap-9 border-b border-[#EBEEF2] mb-4">
        {tabs.map((tab) => {
          const isActive = value === tab.value;

          return (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="relative cursor-pointer pb-2"
            >
              <Text
                as="span"
                className={`text-base font-medium transition-colors ${
                  isActive ? "text-[#1814F3]" : "text-[#718EBF]"
                }`}
              >
                {tab.label}
              </Text>

              {/* Animated underline */}
              {isActive && (
                <motion.div
                  layoutId="tabs-underline"
                  className="absolute left-0 right-0 -bottom-[1px] rounded-sm h-[3px] bg-[#1814F3]"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        {tabs.map(
          (tab) =>
            tab.value === value && (
              <Tabs.Content
                key={tab.value}
                value={tab.value}
                forceMount
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              </Tabs.Content>
            )
        )}
      </AnimatePresence>
    </Tabs.Root>
  );
}
