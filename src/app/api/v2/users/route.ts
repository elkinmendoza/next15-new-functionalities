import { NextRequest } from "next/server";
import { users } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterUsers = query
    ? users.filter(
        (user: {
          id: number;
          name: { first: string; last: string };
          email: string;
        }) =>
          `${user.name.first} ${user.name.last}`.includes(query) ||
          user.email.includes(query) ||
          user.id.toString().includes(query)
      )
    : users;
  return Response.json(filterUsers);
}
