import type { Metadata } from "next";
import { EcommerceDashboard } from "@/components/features/dashboard/ecommerce-dashboard";

export const metadata: Metadata = {
  title: "Ecommerce Dashboard | Ant Panel",
  description: "E-commerce overview with sales metrics, product performance, and order management.",
};

export default function EcommerceDashboardPage() {
  return <EcommerceDashboard />;
}
