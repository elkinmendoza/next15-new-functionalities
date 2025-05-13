import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1 className="text-3xl font-bold underline">Archived Notifications</h1>
      <div>
        <Link href="/complex-dashboard">Notifications</Link>
      </div>
    </Card>
  );
}
