"use client";

import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastPage() {
  return (
    <ShowcaseLayout
      title="Toast"
      description="Toast notification component examples."
    >
      <ShowcaseSection title="Toast Types" description="Different toast notification types">
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => toast.success("Operation completed successfully!")}
          >
            Success Toast
          </Button>
          <Button
            onClick={() => toast.error("An error occurred!")}
            variant="destructive"
          >
            Error Toast
          </Button>
          <Button
            onClick={() => toast.warning("Please review your input")}
            variant="outline"
          >
            Warning Toast
          </Button>
          <Button onClick={() => toast.info("New update available")} variant="secondary">
            Info Toast
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Toast with Action"
        description="Toast with action button"
      >
        <Button
          onClick={() =>
            toast("Event has been created", {
              action: {
                label: "Undo",
                onClick: () => toast.info("Action undone"),
              },
            })
          }
        >
          Toast with Action
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Toast Duration"
        description="Toast with custom duration"
      >
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              toast("This toast will disappear in 1 second", {
                duration: 1000,
              })
            }
          >
            Short Toast (1s)
          </Button>
          <Button
            onClick={() =>
              toast("This toast will disappear in 10 seconds", {
                duration: 10000,
              })
            }
            variant="outline"
          >
            Long Toast (10s)
          </Button>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

