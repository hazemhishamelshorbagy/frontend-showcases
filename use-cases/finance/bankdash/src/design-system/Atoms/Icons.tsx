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
  Car,
  Coffee,
  DollarSign,
  HeartPulse,
  Receipt,
  ShoppingBag,
  TrendingUp,
  Tv,
  Wallet,
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
    // transactions categorized icons
    case "Groceries":
      return <ShoppingBag className={`${size} ${className}`} />;
    case "Entertainment":
      return <Tv className={`${size} ${className}`} />;
    case "Income":
      return <DollarSign className={`${size} ${className}`} />;
    case "Transportation":
    case "Auto & Transport":
      return <Car className={`${size} ${className}`} />;
    case "Dining":
      return <Coffee className={`${size} ${className}`} />;
    case "Investment":
      return <TrendingUp className={`${size} ${className}`} />;
    case "Shopping":
      return <CreditCard className={`${size} ${className}`} />;
    case "Housing":
      return <House className={`${size} ${className}`} />;
    case "Health & Fitness":
      return <HeartPulse className={`${size} ${className}`} />;
    case "Bills & Utilities":
      return <Receipt className={`${size} ${className}`} />;
    case "Credit Card":
      return <Wallet className={`${size} ${className}`} />;
    case "Interest":
      return <Star className={`${size} ${className}`} />; // Added Interest
    case "transfer":
      return <ArrowLeftRight className={`${size} ${className}`} />; // Added transfer type

    default:
      return <Bell className={`${size} ${className}`} />;
  }
}
