"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { AnalyticsItem, UseAnalyticsReturn } from "../types";
import {
    getAnalytics,
    findAnalyticsByPost,
    upsertAnalytics,
    deleteAnalyticsForPost,
    resetAnalytics,
} from "../api/analyticsStore";
import { generateAnalyticsForPost } from "../utils/analyticsGenerator";
import type { Post } from "@/features/posts/types";

/**
 * useAnalytics hook (in-memory store)
 *
 * - Works with the in-memory analyticsStore (no persistence).
 * - Mutations update the global store and the hook calls refresh() so components see the latest data.
 *
 * Returned fields:
 * - items: current analytics items (component-reactive snapshot)
 * - refresh: reload items from the store
 * - findByPost: read helper (reads directly from store)
 * - upsert: create/update analytics for a post
 * - deleteForPost: delete analytics belonging to a post
 * - reset: replace analytics array (dev/testing)
 * - generateMissingFromPosts: create analytics for posts that lack it
 * - totals / byPlatform / timeSeriesByDay: ready-to-use aggregates
 */


export function useAnalytics(opts?: { posts?: Post[] }): UseAnalyticsReturn {
    const posts = opts?.posts ?? [];

    // local snapshot of analytics for reactive UI
    const [items, setItems] = useState<AnalyticsItem[]>(() => getAnalytics());

    // refresh: re-read from the underlying store (call this after external changes)
    const refresh = useCallback(() => {
        setItems(getAnalytics());
    }, []);

    // read helper (reads directly from store, always up-to-date)
    const findByPost = useCallback((postId: string) => findAnalyticsByPost(postId), []);

    // write helpers: mutate store then refresh local snapshot
    const upsert = useCallback((item: AnalyticsItem) => {
        const result = upsertAnalytics(item);
        refresh();
        return result;
    }, [refresh]);

    const deleteForPost = useCallback((postId: string) => {
        const deleted = deleteAnalyticsForPost(postId);
        refresh();
        return deleted;
    }, [refresh]);

    const reset = useCallback((list: AnalyticsItem[] = []) => {
        resetAnalytics(list);
        refresh();
    }, [refresh]);

    // generate analytics for posts that are missing them (useful on first load)
    const generateMissingFromPosts = useCallback((sourcePosts: Post[] = posts) => {
        let changed = false;
        sourcePosts.forEach((p) => {
            const existing = findAnalyticsByPost(p.id);
            if (!existing) {
                const generated = generateAnalyticsForPost(p);
                upsertAnalytics(generated); // mutate store directly
                changed = true;
            }
        });
        if (changed) refresh();
    }, [posts, refresh]);

    // Derived aggregates
    const totals = useMemo(() => {
        return items.reduce(
            (acc, it) => {
                acc.likes += it.metrics.likes;
                acc.comments += it.metrics.comments;
                acc.shares += it.metrics.shares;
                acc.impressions += it.metrics.impressions;
                return acc;
            },
            { likes: 0, comments: 0, shares: 0, impressions: 0 }
        );
    }, [items]);

    const byPlatform = useMemo(() => {
        const map: Record<string, { likes: number; comments: number; shares: number; impressions: number; count: number }> = {};
        items.forEach((it) => {
            const platform = it.platform ?? "unknown";
            if (!map[platform]) map[platform] = { likes: 0, comments: 0, shares: 0, impressions: 0, count: 0 };
            map[platform].likes += it.metrics.likes;
            map[platform].comments += it.metrics.comments;
            map[platform].shares += it.metrics.shares;
            map[platform].impressions += it.metrics.impressions;
            map[platform].count += 1;
        });
        return map;
    }, [items]);

    const timeSeriesByDay = useMemo(() => {
        const map: Record<string, { likes: number; comments: number; shares: number; impressions: number }> = {};
        items.forEach((it) => {
            const day = (it.date ?? it.createdAt ?? new Date().toISOString()).slice(0, 10);
            if (!map[day]) map[day] = { likes: 0, comments: 0, shares: 0, impressions: 0 };
            map[day].likes += it.metrics.likes;
            map[day].comments += it.metrics.comments;
            map[day].shares += it.metrics.shares;
            map[day].impressions += it.metrics.impressions;
        });
        return Object.keys(map).sort().map((day) => ({ date: day, ...map[day] }));
    }, [items]);

    const getForPost = useCallback((postId: string) => items.find((it) => it.postId === postId) ?? null, [items]);

    // auto-generate analytics for passed posts on mount, then refresh state
    useEffect(() => {
        if (posts && posts.length) {
            generateMissingFromPosts(posts);
            refresh();
        }
        // run once on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        items,
        refresh,
        findByPost,
        upsert,
        deleteForPost,
        reset,
        generateMissingFromPosts,
        totals,
        byPlatform,
        timeSeriesByDay,
        getForPost,
    };
}
