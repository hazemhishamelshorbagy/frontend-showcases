export interface NotificationSingleItem {
    id?: string;
    type: string;
    category?: string;
    priority?: "high" | "medium" | "low";
    title?: string;
    message?: string;
    timestamp?: string; // ISO string from JSON
    accountId?: string;
    status?: "unread" | "read";
    action?: string;
    actionUrl?: string;
}
export interface NotificationProps {
    notificationIcon: string;
    notificationLabel: string;
    notificationCountItem: number;
    markAllAsRead?: () => void;
    notificationToolTip?: string;
    notificationitems: NotificationSingleItem[];
}