import { Skeleton } from "@/components/ui/skeleton";

export default function CalendarLoading() {
  return (
    <div className="flex h-full flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="flex-1 overflow-hidden rounded-lg border bg-card">
        <div className="h-full p-4">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

