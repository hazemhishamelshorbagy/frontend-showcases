// src/features/scheduler/types.ts
export interface ScheduledItem {
    id: string; // scheduler entry id
    postId: string; // references Post.id
    scheduledAt: string; // ISO datetime (UTC)
    timezone?: string; // optional timezone tag like "Africa/Cairo"
    createdAt: string;
    updatedAt?: string;
}
