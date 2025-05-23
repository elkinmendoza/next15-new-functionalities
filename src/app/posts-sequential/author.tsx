type Author = {
  id: number;
  name: string;
};
export default async function Author({
  userId,
}: {
  userId: Promise<{ userId: number | string }>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Simulate a delay of 2 seconds

  // const userId = await userIdPromise;
  const { userId: id } = await userId;
  console.log("userId", id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await res.json();
  return (
    <div className="text-gray-500 text-sm">
      <p>Author name: {author.name}</p>
    </div>
  );
}
