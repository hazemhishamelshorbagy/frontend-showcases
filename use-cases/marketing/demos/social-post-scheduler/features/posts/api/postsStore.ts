
import { mockPosts } from "../../../lib/mockData";
import { Post } from "../types";

let posts: Post[] = [...mockPosts];

export const getPosts = (): Post[] => posts;
export const addPost = (p: Post): Post => { posts = [...posts, p]; return p; };
export const updatePost = (id: string, patch: Partial<Post>): Post | null => {
    posts = posts.map(post => post.id === id ? { ...post, ...patch } : post);
    return posts.find(p => p.id === id) ?? null;
};
export const deletePost = (id: string): Post | null => {
    const found = posts.find(p => p.id === id) ?? null;
    posts = posts.filter(p => p.id !== id);
    return found;
};
export const findPost = (id: string): Post | null => posts.find(p => p.id === id) ?? null;
