import { useState } from "react";
import {
    getScheduled,
    addScheduled,
    updateScheduled,
    deleteScheduled,
} from "../api/schedulerStore";
import type { ScheduledItem } from "../types";

export function useScheduler() {
    const [items, setItems] = useState<ScheduledItem[]>(getScheduled());

    const add = (item: ScheduledItem) => {
        addScheduled(item);
        setItems(getScheduled());
    };

    const update = (id: string, patch: Partial<ScheduledItem>) => {
        updateScheduled(id, patch);
        setItems(getScheduled());
    };

    const remove = (id: string) => {
        deleteScheduled(id);
        setItems(getScheduled());
    };

    return { items, add, update, remove };
}
