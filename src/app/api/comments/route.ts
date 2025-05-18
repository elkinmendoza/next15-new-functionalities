import { comments } from "@/app/api/comments/data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const { author, text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    author,
    text,
    date: new Date().toISOString(),
  };
  comments.push(newComment);
  return Response.json(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
