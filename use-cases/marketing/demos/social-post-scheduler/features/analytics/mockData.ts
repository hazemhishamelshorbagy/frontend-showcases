// src/features/analytics/mockData.ts
import { PostMetrics } from "./types";

export const mockAnalytics: PostMetrics[] = [
    { postId: "post_1", platform: "facebook", date: "2025-10-25", impressions: 1200, clicks: 200, likes: 150, comments: 12, shares: 8 },
    { postId: "post_1", platform: "instagram", date: "2025-10-25", impressions: 980, clicks: 110, likes: 90, comments: 8, shares: 4 },
    { postId: "post_2", platform: "linkedin", date: "2025-10-27", impressions: 450, clicks: 40, likes: 25, comments: 3, shares: 1 }
];
