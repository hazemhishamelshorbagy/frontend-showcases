import { NotificationSingleItem } from "@/interfaces/Notifications";

export function getActionUrl(notificationActionUrl?: string, action?: string, status?: string): string | null {
    if (!action) return null;

    const urls: Record<string, string> = {
        review: "/dashboard/transactions",
        pay_now: "/dashboard/bills",
        verify: "/dashboard/security",
        view: "/dashboard/accounts",
        trade: "/dashboard/investments",
        learn_more: "/dashboard/offers",
        redeem: "/dashboard/rewards",
        change_password: "/dashboard/security/password"
    };

    // You can also add logic based on status
    if (status === "read") {
        // Optional: redirect read notifications somewhere else
        return "/dashboard/notifications";
    }

    return urls[action] || null;
}
