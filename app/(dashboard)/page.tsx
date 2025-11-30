import { Metadata } from "next";

import { DashboardOverview } from "@/components/features/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Executive overview of revenue, activity, and quick actions.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
