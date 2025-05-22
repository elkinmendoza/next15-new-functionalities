import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  if (themePreference) {
    response.cookies.delete("theme");
  }

  return response;

  // Uncomment the following lines to enable logging and redirection
  // console.log("Middleware is running...");
  // console.log("Request URL:", request.nextUrl);
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/hello", request.url));
  // }

  // return NextResponse.next(); // must return this if no redirect
}
