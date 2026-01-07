// src/features/posts/types.ts
export type Platform = "facebook" | "instagram" | "linkedin" | "x";

export type PostStatus = "draft" | "scheduled" | "posted" | "failed";

export interface Post {
    id: string;
    text: string;
    platforms: Platform[];
    scheduledAt: string; // ISO datetime (UTC)
    image?: string | null; // path in public/ or external URL
    status: PostStatus;
    createdAt: string; // ISO datetime
    updatedAt?: string; // ISO datetime (optional)
}
