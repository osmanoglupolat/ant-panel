import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blank Page | Ant Panel",
  description: "A blank page ready for your content.",
};

/**
 * BlankPage Component
 * 
 * A clean, empty page ready for custom content.
 * This page serves as a starting point for new features or content.
 */
export default function BlankPage() {
  return (
    <div className="flex h-full min-h-[600px] items-center justify-center">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-3xl font-semibold tracking-tight">
          Blank Page
        </h1>
        <p className="text-muted-foreground text-sm">
          This is a blank page. Start building your content here.
        </p>
      </div>
    </div>
  );
}

