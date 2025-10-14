import { NextResponse } from "next/server";
import { getAnalytics } from "@/features/analytics/api/analyticsStore";

export async function GET() {
    return NextResponse.json(getAnalytics());
}
