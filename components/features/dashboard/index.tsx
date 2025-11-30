"use client";

import { dashboardData } from "@/lib/mocks/dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { RevenueChart } from "./revenue-chart";
import { StatCards } from "./stat-cards";

export function DashboardOverview() {
  const { stats, revenueTrend, activity, quickActions } = dashboardData;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Dashboard</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Executive overview
          </h1>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Today • {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        </div>
      </div>

      <StatCards items={stats} />

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RevenueChart data={revenueTrend} />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <ActivityFeed items={activity} />
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}


