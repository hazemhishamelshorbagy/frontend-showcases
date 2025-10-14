// src/features/analytics/types.ts
export interface PostMetrics {
    postId: string;
    platform: string;
    date: string; // ISO date (day-level) e.g., "2025-10-25"
    impressions: number;
    clicks: number;
    likes?: number;
    comments?: number;
    shares?: number;
}
