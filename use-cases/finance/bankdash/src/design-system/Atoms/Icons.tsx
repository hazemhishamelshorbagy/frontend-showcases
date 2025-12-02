import React from "react";
import {
  Shield,
  CreditCard,
  Calendar,
  Bell,
  Star,
  House,
  ArrowLeftRight,
  Users,
  ChartArea,
  HandIcon,
  Wrench,
  Lightbulb,
  Settings,
} from "lucide-react";

export function Icon({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  const size = "w-6 h-6";
  switch (type) {
    case "security":
      return <Shield className={`${size} ${className}`} />;
    case "transaction":
      return <CreditCard className={`${size} ${className}`} />;
    case "bill":
      return <Calendar className={`${size} ${className}`} />;
    case "reward":
      return <Star className={`${size} ${className}`} />;
    case "dashboard":
      return <House className={`${size} ${className}`} />;
    case "transactions":
      return <ArrowLeftRight className={`${size} ${className}`} />;
    case "accounts":
      return <Users className={`${size} ${className}`} />;
    case "investments":
      return <ChartArea className={`${size} ${className}`} />;
    case "credit-cards":
      return <CreditCard className={`${size} ${className}`} />;
    case "loans":
      return <HandIcon className={`${size} ${className}`} />;
    case "services":
      return <Wrench className={`${size} ${className}`} />;
    case "privileges":
      return <Lightbulb className={`${size} ${className}`} />;
    case "settings":
      return <Settings className={`${size} ${className}`} />;

    default:
      return <Bell className={`${size} ${className}`} />;
  }
}
