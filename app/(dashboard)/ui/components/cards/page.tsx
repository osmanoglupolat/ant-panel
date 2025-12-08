import type { Metadata } from "next";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cards | UI Components | Ant Panel",
  description: "Card component examples and variations.",
};

export default function CardsPage() {
  return (
    <ShowcaseLayout
      title="Cards"
      description="Card components for displaying content in containers."
    >
      <ShowcaseSection title="Basic Card" description="Simple card component">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description text goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content goes here. You can put any content inside a card.</p>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Card with Footer"
        description="Card with footer actions"
      >
        <Card>
          <CardHeader>
            <CardTitle>Card with Actions</CardTitle>
            <CardDescription>Card with footer buttons</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card includes a footer with action buttons.</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Card Grid" description="Multiple cards in a grid">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
              <CardDescription>First card</CardDescription>
            </CardHeader>
            <CardContent>Content of first card</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
              <CardDescription>Second card</CardDescription>
            </CardHeader>
            <CardContent>Content of second card</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 3</CardTitle>
              <CardDescription>Third card</CardDescription>
            </CardHeader>
            <CardContent>Content of third card</CardContent>
          </Card>
        </div>
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}
