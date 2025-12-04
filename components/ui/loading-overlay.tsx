"use client";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type LoadingOverlayProps = {
  isLoading: boolean;
  message?: string;
  className?: string;
};

export function LoadingOverlay({
  isLoading,
  message = "Loading...",
  className,
}: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
      aria-label="Loading overlay"
    >
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" />
        {message && (
          <p className="text-sm font-medium text-muted-foreground">{message}</p>
        )}
      </div>
    </div>
  );
}

