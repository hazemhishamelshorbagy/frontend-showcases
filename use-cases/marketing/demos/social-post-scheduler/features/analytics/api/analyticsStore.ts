// src/features/analytics/api/analyticsStore.ts
import { AnalyticsItem } from "../types";
import { mockAnalytics } from "../mockData";

let analytics: AnalyticsItem[] = [...mockAnalytics];

/** return all analytics items */
export const getAnalytics = (): AnalyticsItem[] => [...analytics];

/** find analytics by post id */
export const findAnalyticsByPost = (postId: string): AnalyticsItem | undefined =>
    analytics.find(a => a.postId === postId);

/** add or replace analytics for a post */
export const upsertAnalytics = (item: AnalyticsItem): AnalyticsItem => {
    const exists = analytics.some(a => a.postId === item.postId);
    if (exists) {
        analytics = analytics.map(a => (a.postId === item.postId ? { ...a, ...item, updatedAt: new Date().toISOString() } : a));
    } else {
        analytics = [...analytics, item];
    }
    return item;
};

/** delete analytics by post id */
export const deleteAnalyticsForPost = (postId: string): AnalyticsItem | null => {
    const found = analytics.find(a => a.postId === postId) ?? null;
    analytics = analytics.filter(a => a.postId !== postId);
    return found;
};

/** reset (useful for tests / demo) */
export const resetAnalytics = (items: AnalyticsItem[] = []) => {
    analytics = [...items];
};
