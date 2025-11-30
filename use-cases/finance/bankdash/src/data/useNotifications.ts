import notificationsData from './notifications.json';

export function useNotifications() {
    // You could add filtering, sorting, or memoization here if needed
    return notificationsData.notifications;
}
