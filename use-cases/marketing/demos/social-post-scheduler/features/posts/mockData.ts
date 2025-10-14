// src/features/posts/mockData.ts
import { Post } from "./types";

export const mockPosts: Post[] = [
    {
        id: "post_1",
        text: "Launch our new product today! 🚀",
        platforms: ["facebook", "instagram"],
        scheduledAt: "2025-10-25T10:00:00.000Z",
        image: "/demo/example-image.png",
        status: "scheduled",
        createdAt: "2025-10-12T09:00:00.000Z"
    },
    {
        id: "post_2",
        text: "Join our newsletter for exclusive tips!",
        platforms: ["linkedin", "x"],
        scheduledAt: "2025-10-27T14:00:00.000Z",
        image: null,
        status: "scheduled",
        createdAt: "2025-10-12T10:00:00.000Z"
    },
    {
        id: "post_3",
        text: "Check out our blog about automation.",
        platforms: ["facebook", "linkedin"],
        scheduledAt: "2025-10-20T09:00:00.000Z",
        image: null,
        status: "draft",
        createdAt: "2025-10-12T11:00:00.000Z"
    }
];
