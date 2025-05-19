import { comments } from "@/app/api/comments/data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
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
