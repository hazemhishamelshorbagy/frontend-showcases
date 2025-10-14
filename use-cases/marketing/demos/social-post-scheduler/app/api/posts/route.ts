import { NextResponse } from "next/server";
import { getPosts, addPost } from "@/features/posts/api/postsStore";
import { Post } from "@/features/posts/types";


export async function GET() {
    return NextResponse.json(getPosts());
}

export async function POST(req: Request) {
    const body = await req.json().catch(() => null);
    if (!body?.text || !body?.scheduledAt) {
        return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const newPost: Post = {
        id: Date.now().toString(),
        text: body.text,
        platforms: body.platforms ?? [],
        scheduledAt: body.scheduledAt,
        image: body.image ?? null,
        status: body.status ?? "scheduled",
        createdAt: new Date().toISOString()
    };

    addPost(newPost);
    return NextResponse.json(newPost, { status: 201 });
}
