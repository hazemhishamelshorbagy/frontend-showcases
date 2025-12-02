import React from "react";

export function PriorityPill({
  priority = "low",
}: {
  priority?: "high" | "medium" | "low";
}) {
  const map = {
    high: "bg-raw-red",
    medium: "bg-raw-dark-blue",
    low: "bg-raw-muted-blue",
  } as const;
  return (
    <span
      className={`size-2 text-white rounded-full font-medium ${map[priority]}`}
      aria-hidden
    />
  );
}
