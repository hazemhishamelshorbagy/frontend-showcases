"use client";
import Image from "next/image";
import { useQuery, useMutation } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
export default function Home() {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}
