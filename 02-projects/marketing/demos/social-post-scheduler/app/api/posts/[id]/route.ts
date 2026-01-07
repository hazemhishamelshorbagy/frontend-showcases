import { NextResponse } from "next/server";
import { findPost, updatePost, deletePost } from "@/features/posts/api/postsStore";

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const p = findPost(params.id);
    if (!p) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(p);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json().catch(() => ({}));
    const updated = updatePost(params.id, body);
    if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const deleted = deletePost(params.id);
    if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(deleted);
}
