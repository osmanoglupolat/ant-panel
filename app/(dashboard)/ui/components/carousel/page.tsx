import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Carousel | UI Components | Ant Panel",
  description: "Carousel component examples.",
};

export default function CarouselPage() {
  return (
    <ShowcaseLayout
      title="Carousel"
      description="Carousel component for displaying content slides."
    >
      <ShowcaseSection
        title="Carousel Example"
        description="Basic carousel implementation"
      >
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Carousel component implementation coming soon. This would typically
            include navigation arrows, dots, and auto-play functionality.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  Slide 1
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  Slide 2
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  Slide 3
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

