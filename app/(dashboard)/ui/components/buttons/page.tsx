import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Button } from "@/components/ui/button";
import { Download, Plus, Trash2, Settings, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Buttons | UI Components | Ant Panel",
  description: "Button component variations and styles.",
};

export default function ButtonsPage() {
  return (
    <ShowcaseLayout
      title="Buttons"
      description="Button component variations with different styles, sizes, and states."
    >
      <ShowcaseSection title="Button Variants" description="Different button styles">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Sizes" description="Different button sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button with Icons" description="Buttons with icon support">
        <div className="flex flex-wrap gap-3">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button States" description="Disabled and loading states">
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Button Groups" description="Grouped buttons">
        <div className="flex gap-0 border rounded-lg overflow-hidden w-fit">
          <Button variant="outline" className="rounded-none border-r-0">
            Left
          </Button>
          <Button variant="outline" className="rounded-none border-r-0">
            Middle
          </Button>
          <Button variant="outline" className="rounded-none">
            Right
          </Button>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
