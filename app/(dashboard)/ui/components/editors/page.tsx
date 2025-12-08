import type { Metadata } from "next";
import { EditorsShowcase } from "@/components/features/ui/editors-showcase";

export const metadata: Metadata = {
  title: "Editors | UI Components | Ant Panel",
  description: "Rich text editor and markdown editor component examples.",
};

export default function EditorsPage() {
  return <EditorsShowcase />;
}
