import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Blog Page - Next.js 15",
  },
};

export default async function Blog() {
  // Simulate a delay to fetch data
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Fetch blog posts from an API or database
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the second blog post.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      content: "This is the third blog post.",
    },
  ];
  // Render the blog posts
  const renderedPosts = blogPosts.map((post) => (
    <div key={post.id} className="mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        {renderedPosts}
        <p className="text-gray-500">No more posts available.</p>
      </div>
    </main>
  );
}
