"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import type { StatCard } from "@/lib/types/dashboard";
import { cn } from "@/lib/utils";

type StatCardsProps = {
  items: StatCard[];
};

export function StatCards({ items }: StatCardsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const isUp = item.trend === "up";
        const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight;

        return (
          <article
            key={item.id}
            className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{item.label}</span>
              <TrendIcon
                className={cn(
                  "h-4 w-4",
                  isUp ? "text-emerald-500" : "text-rose-500"
                )}
              />
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              {item.value}
            </p>
            <p
              className={cn(
                "mt-1 text-sm font-medium",
                isUp ? "text-emerald-500" : "text-rose-500"
              )}
            >
              {item.change} vs last month
            </p>
          </article>
        );
      })}
    </section>
  );
}



