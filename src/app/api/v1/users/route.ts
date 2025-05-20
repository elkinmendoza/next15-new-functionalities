import { NextRequest } from "next/server";
import userList from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterUsers = query
    ? userList.filter((user) => user.name.includes(query))
    : userList;
  return Response.json(filterUsers);
}
