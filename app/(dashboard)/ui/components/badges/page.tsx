import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Badges | UI Components | Ant Panel",
  description: "Badge component examples and variations.",
};

export default function BadgesPage() {
  return (
    <ShowcaseLayout
      title="Badges"
      description="Badge components for labels, status indicators, and tags."
    >
      <ShowcaseSection title="Badge Variants" description="Different badge styles">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Status Badges" description="Status indicator badges">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-emerald-500 hover:bg-emerald-600">Active</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badge Sizes" description="Different badge sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="text-xs px-2 py-0.5">Small</Badge>
          <Badge>Default</Badge>
          <Badge className="text-base px-3 py-1.5">Large</Badge>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
