import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
  // const requestHeaders = request.headers;
  // console.log("Request Headers:", requestHeaders.get("Authorization"));
  // console.log("Request URL:", requestHeaders);
  const headerList = await headers();

  console.log("Header List:", headerList.get("Authorization"));
  console.log("Header List:", headerList.get("User-Agent"));
  return new Response("<h1>Profile API data</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      Authorization: headerList.get("Authorization") || "",
      "User-Agent": headerList.get("User-Agent") || "",
    },
  });
}
