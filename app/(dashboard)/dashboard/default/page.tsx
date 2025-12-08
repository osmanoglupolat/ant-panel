import type { Metadata } from "next";
import { DashboardOverview } from "@/components/features/dashboard";

export const metadata: Metadata = {
  title: "Dashboard | Ant Panel",
  description: "Executive overview of revenue, activity, and quick actions.",
};

export default function DefaultDashboardPage() {
  return <DashboardOverview />;
}
