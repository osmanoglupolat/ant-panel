"use client";

import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CollapsePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ShowcaseLayout
      title="Collapse"
      description="Collapsible content component examples."
    >
      <ShowcaseSection title="Basic Collapse" description="Simple collapsible section">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Click to {isOpen ? "collapse" : "expand"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <div className="rounded-lg border bg-muted/50 p-4">
              <p>
                This is the collapsible content. It can contain any type of
                content including forms, lists, or other components.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      <ShowcaseSection
        title="Multiple Collapse Sections"
        description="Multiple collapsible sections"
      >
        <div className="space-y-2">
          {[
            { title: "Section 1", content: "Content for section 1" },
            { title: "Section 2", content: "Content for section 2" },
            { title: "Section 3", content: "Content for section 3" },
          ].map((section, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {section.title}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="rounded-lg border bg-muted/50 p-4 mt-2">
                  {section.content}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

