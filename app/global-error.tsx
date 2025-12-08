"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Global Error Handler
 * 
 * This component catches errors in the root layout.
 * It must define its own <html> and <body> tags.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error using centralized error logger
    // Note: We can't import error-logger here as it might cause circular dependency
    // In a real app, you'd want to set up error tracking at the root level
    if (process.env.NODE_ENV === "development") {
      console.error("Global error caught:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-destructive/10 p-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <CardTitle>Critical Error</CardTitle>
                  <CardDescription>
                    An unexpected error occurred
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {error.message && (
                  <div className="rounded-lg bg-muted p-3">
                    <p className="text-sm font-medium text-foreground">
                      Error Details:
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs font-mono">
                      {error.message}
                    </p>
                  </div>
                )}
                <p className="text-muted-foreground text-sm">
                  A critical error occurred in the application. Please refresh
                  the page or contact support if the problem persists.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={reset} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
              </Button>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  );
}

