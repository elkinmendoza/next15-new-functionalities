import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return new Response(JSON.stringify(comment), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.findIndex((comment) => comment.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  const updatedComment = await request.json();

  console.log("updatedComment", updatedComment);

  comments[comment] = updatedComment;
  return new Response(JSON.stringify(comments[comment]));
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments.splice(commentIndex, 1);
  return new Response("Comment deleted", { status: 200 });
}
