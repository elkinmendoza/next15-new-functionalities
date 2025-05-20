import { NextRequest } from "next/server";
import { users } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterUsers = query
    ? users.filter(
        (user: {
          id: number;
          name: string | string[];
          email: string | string[];
        }) =>
          user.name.includes(query) ||
          user.email.includes(query) ||
          user.id.toString().includes(query)
      )
    : users;
  return Response.json(filterUsers);
}
