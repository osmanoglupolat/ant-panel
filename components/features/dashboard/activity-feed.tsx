"use client";

import { CheckCircle2, Clock, Flag } from "lucide-react";

import type { ActivityItem } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";

type ActivityFeedProps = {
  items: ActivityItem[];
};

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <section className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <header className="flex items-center justify-between pb-4">
        <div>
          <p className="text-sm text-muted-foreground">Activity</p>
          <h2 className="text-lg font-semibold text-foreground">
            Operational timeline
          </h2>
        </div>
        <button className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          View all
        </button>
      </header>
      <ol className="space-y-4 text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <StatusIcon status={item.status} />
            <div className="flex-1">
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-muted-foreground">{item.description}</p>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function StatusIcon({
  status,
}: Pick<ActivityItem, "status">) {
  const styles = {
    success: "text-emerald-500 bg-emerald-500/10",
    pending: "text-amber-500 bg-amber-500/10",
    alert: "text-rose-500 bg-rose-500/10",
  } satisfies Record<ActivityItem["status"], string>;

  const Icon =
    status === "success" ? CheckCircle2 : status === "pending" ? Clock : Flag;

  return (
    <span
      className={cn(
        "mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm",
        styles[status]
      )}
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}


