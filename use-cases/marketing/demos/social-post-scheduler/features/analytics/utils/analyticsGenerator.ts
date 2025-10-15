// src/features/analytics/utils/analyticsGenerator.ts
import type { Post } from "@/features/posts/types";
import type { AnalyticsItem } from "../types";

/**
 * Create simple randomized analytics for a post.
 * Deterministic-ish randomness using postId hash for demo consistency.
 */

function seedFromString(s: string) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

export function generateAnalyticsForPost(post: Post): AnalyticsItem {
    const seed = seedFromString(post.id);
    const likes = (seed % 200) + Math.floor(Math.abs(Math.sin(seed)) * 50);
    const comments = (seed % 50) + Math.floor(Math.abs(Math.cos(seed)) * 10);
    const shares = (seed % 30) + Math.floor((seed % 7));
    const impressions = likes * 20 + comments * 10 + shares * 40 + ((seed % 1000));
    const engagementRate = +((likes + comments + shares) / Math.max(1, impressions)).toFixed(4);

    const item: AnalyticsItem = {
        id: `an_${post.id}`,
        postId: post.id,
        platform: post.platforms?.[0] ?? "facebook",
        date: post.scheduledAt ?? post.createdAt ?? new Date().toISOString(),
        metrics: {
            likes,
            comments,
            shares,
            impressions,
            engagementRate,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    return item;
}
