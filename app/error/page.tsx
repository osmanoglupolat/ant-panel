import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Error | Ant Panel",
  description: "An error occurred",
};

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">500</h1>
            <h2 className="text-2xl font-semibold">Internal Server Error</h2>
            <p className="text-muted-foreground">
              Something went wrong on our end. Please try again later or contact
              support if the problem persists.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  );
}

