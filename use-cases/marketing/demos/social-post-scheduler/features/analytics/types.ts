import { Post } from "../posts/types";

// src/features/analytics/types.ts
export interface AnalyticsMetrics {
    likes: number;
    comments: number;
    shares: number;
    impressions: number;
    engagementRate: number; // 0..1
}

export interface AnalyticsItem {
    id: string;
    postId: string;
    platform?: string;
    date: string; // ISO
    metrics: AnalyticsMetrics;
    createdAt: string;
    updatedAt: string;
}

export interface UseAnalyticsReturn {
    items: AnalyticsItem[];
    refresh: () => void;
    findByPost: (postId: string) => AnalyticsItem | undefined;
    upsert: (item: AnalyticsItem) => AnalyticsItem;
    deleteForPost: (postId: string) => AnalyticsItem | null;
    reset: (items?: AnalyticsItem[]) => void;
    generateMissingFromPosts: (posts?: Post[]) => void;
    totals: { likes: number; comments: number; shares: number; impressions: number };
    byPlatform: Record<string, { likes: number; comments: number; shares: number; impressions: number; count: number }>;
    timeSeriesByDay: { date: string; likes: number; comments: number; shares: number; impressions: number }[];
    getForPost: (postId: string) => AnalyticsItem | null;
};
