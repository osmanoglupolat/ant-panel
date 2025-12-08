import { Metadata } from "next";

import { DashboardOverview } from "@/components/features/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Executive overview of revenue, activity, and quick actions. Monitor your business metrics, track performance, and access quick actions from a centralized dashboard.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
