import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number | string;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 ">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-gray-500 text-sm mt-2">User ID: {post.userId}</p>
            <p className="text-gray-500 text-sm">Post ID: {post.id}</p>
            <Suspense fallback={<p>Loading author...</p>}>
              <Author userId={Promise.resolve({ userId: post.userId })} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
