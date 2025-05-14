import { Card } from "@/components/card";
import Link from "next/link";
export default function Notifications() {
  return (
    <Card>
      <h1 className="text-3xl font-bold underline">Notifications</h1>

      <Link
        href="/complex-dashboard/archived"
        className="text-3xl font-bold underline"
      >
        Archived
      </Link>
    </Card>
  );
}
