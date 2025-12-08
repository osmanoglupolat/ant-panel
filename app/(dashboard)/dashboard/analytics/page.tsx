import type { Metadata } from "next";
import { AnalyticsDashboard } from "@/components/features/dashboard/analytics-dashboard";

export const metadata: Metadata = {
  title: "Analytics Dashboard | Ant Panel",
  description: "Analytics and insights dashboard with traffic metrics and user behavior.",
};

export default function AnalyticsDashboardPage() {
  return <AnalyticsDashboard />;
}
