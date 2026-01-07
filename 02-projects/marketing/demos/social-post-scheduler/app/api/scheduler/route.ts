import { NextResponse } from "next/server";
import { getScheduled } from "@/features/scheduler/api/schedulerStore";

export async function GET() {
    return NextResponse.json(getScheduled());
}
