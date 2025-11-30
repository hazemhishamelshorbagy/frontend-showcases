import React from "react";

export function Timestamp({
  iso,
  className = "",
}: {
  iso: string;
  className?: string;
}) {
  const label = (() => {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m`;
    if (mins < 1440) return `${Math.floor(mins / 60)}h`;
    return new Date(iso).toLocaleDateString();
  })();

  return (
    <time
      dateTime={iso}
      className={`text-xs text-muted-foreground ${className}`}
    >
      {label}
    </time>
  );
}
