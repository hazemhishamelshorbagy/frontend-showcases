import React from "react";

export function PriorityPill({
  priority = "low",
}: {
  priority?: "high" | "medium" | "low";
}) {
  const map = {
    high: "bg-destructive/90",
    medium: "bg-accent/90",
    low: "bg-muted/80",
  } as const;
  return (
    <span
      className={`py-1 px-3 text-white rounded-full font-medium ${map[priority]}`}
      aria-hidden
    >
      {priority}
    </span>
  );
}
