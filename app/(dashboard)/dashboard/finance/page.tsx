import type { Metadata } from "next";
import { FinanceDashboard } from "@/components/features/dashboard/finance-dashboard";

export const metadata: Metadata = {
  title: "Finance Dashboard | Ant Panel",
  description: "Financial overview with revenue, expenses, profit margins, and budgeting.",
};

export default function FinanceDashboardPage() {
  return <FinanceDashboard />;
}
