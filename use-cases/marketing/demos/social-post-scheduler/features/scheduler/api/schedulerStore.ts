// src/features/scheduler/api/schedulerStore.ts
import { ScheduledItem } from "../types";
import { mockScheduled } from "../mockData";

let scheduled: ScheduledItem[] = [...mockScheduled];

export const getScheduled = (): ScheduledItem[] => [...scheduled];
export const findScheduled = (id: string): ScheduledItem | undefined => scheduled.find(s => s.id === id);
export const addScheduled = (item: ScheduledItem): ScheduledItem => {
    scheduled = [...scheduled, item];
    return item;
};
export const updateScheduled = (id: string, patch: Partial<ScheduledItem>): ScheduledItem | null => {
    scheduled = scheduled.map(s => s.id === id ? { ...s, ...patch, updatedAt: new Date().toISOString() } : s);
    return scheduled.find(s => s.id === id) ?? null;
};
export const deleteScheduled = (id: string): ScheduledItem | null => {
    const found = scheduled.find(s => s.id === id) ?? null;
    scheduled = scheduled.filter(s => s.id !== id);
    return found;
};
