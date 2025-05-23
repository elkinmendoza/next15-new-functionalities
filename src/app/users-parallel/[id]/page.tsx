type Post = {
  userId: number | string;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number | string;
  id: number;
  title: string;
};

async function getUserPosts(userId: number | string) {
  // Simulate a delay of 5 seconds
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const posts: Post[] = await res.json();
  return posts;
}

async function getUserAlbums(userId: number | string) {
  // Simulate a delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  const albums: Album[] = await res.json();
  return albums;
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string | number }>;
}) {
  const { id } = await params;
  const postData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postData, albumsData]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 ">User {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-2">Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <h3 className="text-lg font-semibold text-black">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>

        <>
          <h2 className="text-xl font-bold mb-2">Albums</h2>
          {albums.map((album) => (
            <div
              key={album.id}
              className="mb-4 bg-white shadow-md rounded-lg p-6"
            >
              <h3 className="text-lg  text-black">{album.title}</h3>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
