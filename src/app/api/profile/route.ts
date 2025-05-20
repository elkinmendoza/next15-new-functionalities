import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  // const requestHeaders = request.headers;
  // console.log("Request Headers:", requestHeaders.get("Authorization"));
  // console.log("Request URL:", requestHeaders);
  const headerList = await headers();
  const cookiesStore = await cookies();
  console.log("Header List:", headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  cookiesStore.set("resultsPerPage", "10");
  console.log("Theme Cookie:", theme);
  return new Response(
    "<section class='w-full h-screen  my-12 m-auto'><h1>Profile API data</h1></section>",
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        Authorization: headerList.get("Authorization") || "",
        "Set-Cookie": "theme=dark",
        "User-Agent": headerList.get("User-Agent") || "",
      },
    }
  );
}
