export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false; // Replace with actual authentication logic
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div className="container mx-auto min-h-screen p-4">
        <div className="flex">
          <div className="md:w-2/5 p-4">
            <h2 className="text-2xl font-bold">User Analytics</h2>
            {users}
          </div>
          <div className="md:w-3/5 p-4">
            <h2 className="text-2xl font-bold">Revenue Metrics</h2>
            {revenue}
          </div>
        </div>

        <div className="flex my-8">
          <div className="w-full p-4">{notifications}</div>
        </div>
      </div>
    </>
  ) : (
    login
  ); // If not logged in, show the login page;
}
