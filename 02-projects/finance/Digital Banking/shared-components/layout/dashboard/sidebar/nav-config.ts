import { accounts, creditcards, dashboard, investement, loans, services, settings, transactions } from "@/public/icons";


export const sidebarItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: dashboard,
    },
    {
        label: "Transactions",
        href: "/dashboard/transactions",
        icon: transactions,
    },
    {
        label: "Accounts",
        href: "/dashboard/accounts",
        icon: accounts,
    },
    {
        label: "Investments",
        href: "/dashboard/investments",
        icon: investement,
    },
    {
        label: "CreditsCards",
        href: "/dashboard/credit-cards",
        icon: creditcards,
    },
    {
        label: "Loans",
        href: "/dashboard/loans",
        icon: loans,
    },

    {
        label: "Services",
        href: "/dashboard/services",
        icon: services,
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        icon: settings,
    },
];