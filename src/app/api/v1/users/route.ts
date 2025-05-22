import { NextRequest } from "next/server";
import userList from "./data";

import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  redirect("/api/v2/users");
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterUsers = query
    ? userList.filter((user) => user.name.includes(query || ""))
    : userList;

  return Response.json(filterUsers);
}
