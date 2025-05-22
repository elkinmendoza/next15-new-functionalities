export const dynamic = "force-static";

export async function GET() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return Response.json({ time: currentTime });
}
