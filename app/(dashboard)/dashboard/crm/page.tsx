import type { Metadata } from "next";
import { CRMDashboard } from "@/components/features/dashboard/crm-dashboard";

export const metadata: Metadata = {
  title: "CRM Dashboard | Ant Panel",
  description: "Customer relationship management with leads, deals, and pipeline tracking.",
};

export default function CRMDashboardPage() {
  return <CRMDashboard />;
}
