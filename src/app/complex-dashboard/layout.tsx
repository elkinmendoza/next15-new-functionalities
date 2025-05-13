import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/UserAnalytics";
import Notifications from "@/components/UserAnalytics";

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <UserAnalytics />
      <RevenueMetrics />
      <Notifications />
    </>
  );
}
