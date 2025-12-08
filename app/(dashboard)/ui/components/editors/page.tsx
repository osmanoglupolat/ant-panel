import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Editors | UI Components | Ant Panel",
  description: "Rich text editor component examples.",
};

export default function EditorsPage() {
  return (
    <ShowcaseLayout
      title="Editors"
      description="Rich text editor component examples."
    >
      <ShowcaseSection
        title="Text Editor"
        description="Rich text editor implementation"
      >
        <div className="space-y-2">
          <Label>Rich Text Editor</Label>
          <div className="border rounded-lg p-4 min-h-[200px]">
            <p className="text-sm text-muted-foreground">
              Rich text editor implementation would go here. This typically
              includes formatting toolbar, text area, and formatting controls.
            </p>
            <Textarea
              placeholder="Start typing..."
              className="min-h-[150px] border-0 focus-visible:ring-0"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border rounded hover:bg-muted">
              Bold
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-muted">
              Italic
            </button>
            <button className="px-3 py-1 text-sm border rounded hover:bg-muted">
              Underline
            </button>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

