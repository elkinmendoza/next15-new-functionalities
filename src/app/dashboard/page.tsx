import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const authobject = await auth();
  const userObject = await currentUser();
  console.log("auth object", authobject);
  console.log("user object", userObject);
  return (
    <div className="max-w-7xl mx-auto p-16">
      <h1>Dashboard</h1>
    </div>
  );
}
