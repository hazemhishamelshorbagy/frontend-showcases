import { useState } from "react";
import { Post } from "../types";
import { addPost, deletePost, findPost, getPosts, updatePost } from "../api/postsStore";

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>(getPosts());

    const createPost = (post: Post) => {
        addPost(post);
        setPosts(getPosts())
    }

    const removePost = (id: string) => {
        const deleted = deletePost(id);
        setPosts(getPosts())
        return deleted
    }

    const editPost = (id: string, patch: Partial<Post>) => {
        const updated = updatePost(id, patch);
        setPosts(getPosts());
        return updated
    }
    const movePost = (id: string, newDate: string) => {
        const updated = updatePost(id, { scheduledAt: newDate });
        setPosts(getPosts());
        return updated;
    };
    const reorderPosts = (sourceIndex: number, destinationIndex: number) => {
        const updatedPosts = [...posts];
        const [removed] = updatedPosts.splice(sourceIndex, 1);
        updatedPosts.splice(destinationIndex, 0, removed);
        setPosts(updatedPosts);
    };

    const find = (query: string) => findPost(query)

    return { posts, createPost, removePost, editPost, find, movePost, reorderPosts }
}