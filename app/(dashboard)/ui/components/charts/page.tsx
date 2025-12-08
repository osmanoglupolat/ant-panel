import type { Metadata } from "next";
import { ChartsShowcase } from "@/components/features/ui/charts-showcase";

export const metadata: Metadata = {
  title: "Charts | UI Components | Ant Panel",
  description: "Chart component examples and variations.",
};

export default function ChartsPage() {
  return <ChartsShowcase />;
}
