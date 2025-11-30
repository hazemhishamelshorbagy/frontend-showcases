import React from "react";
import { Shield, CreditCard, Calendar, Bell, Star } from "lucide-react";

export function Icon({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  const size = "w-5 h-5";
  switch (type) {
    case "security":
      return <Shield className={`${size} ${className}`} />;
    case "transaction":
      return <CreditCard className={`${size} ${className}`} />;
    case "bill":
      return <Calendar className={`${size} ${className}`} />;
    case "reward":
      return <Star className={`${size} ${className}`} />;
    default:
      return <Bell className={`${size} ${className}`} />;
  }
}
