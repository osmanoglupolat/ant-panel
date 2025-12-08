"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/lib/constants";
import { logError } from "@/lib/utils/error-logger";

/**
 * Global Error Page
 * 
 * This page is shown when an error occurs in the root layout or a route segment.
 * It catches errors and displays a user-friendly error message.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error using centralized error logger
    logError(error, undefined, {
      digest: error.digest,
      source: "error-page",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-destructive/10 p-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <CardTitle>Something went wrong</CardTitle>
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
            {error.digest && (
              <p className="text-muted-foreground text-xs">
                Error ID: {error.digest}
              </p>
            )}
            <p className="text-muted-foreground text-sm">
              We apologize for the inconvenience. Please try refreshing the
              page or return to the dashboard.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" onClick={reset}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button asChild>
            <a href={ROUTES.DASHBOARD}>
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

