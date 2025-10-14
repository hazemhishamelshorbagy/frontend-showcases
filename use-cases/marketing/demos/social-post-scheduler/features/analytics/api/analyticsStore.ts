// src/features/analytics/api/analyticsStore.ts
import { PostMetrics } from "../types";
import { mockAnalytics } from "../mockData";

let metrics: PostMetrics[] = [...mockAnalytics];

export const getAnalytics = (): PostMetrics[] => [...metrics];

// simple aggregator example (by post)
export const getMetricsForPost = (postId: string): PostMetrics[] => metrics.filter(m => m.postId === postId);

// replace or append for demo
export const addMetrics = (m: PostMetrics) => { metrics = [...metrics, m]; return m; };
export const clearMetrics = () => { metrics = []; };
