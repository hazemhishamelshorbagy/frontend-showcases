// src/features/scheduler/mockData.ts
import { ScheduledItem } from "./types";

export const mockScheduled: ScheduledItem[] = [
    {
        id: "sched_1",
        postId: "post_1",
        scheduledAt: "2025-10-25T10:00:00.000Z",
        timezone: "UTC",
        createdAt: "2025-10-12T09:05:00.000Z"
    },
    {
        id: "sched_2",
        postId: "post_2",
        scheduledAt: "2025-10-27T14:00:00.000Z",
        timezone: "UTC",
        createdAt: "2025-10-12T10:05:00.000Z"
    }
];
