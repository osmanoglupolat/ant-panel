"use client";

import dynamic from "next/dynamic";

import {
  analyticsStats,
  analyticsTraffic,
  trafficSources,
  deviceBreakdown,
  analyticsActivity,
  topPages,
} from "@/lib/mocks/analytics-dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { StatCards } from "./stat-cards";

// Dynamic imports for chart components - Analytics specific
const RevenueChart = dynamic(
  () => import("./revenue-chart").then((mod) => mod.RevenueChart),
  { ssr: false }
);
const ChannelBarChart = dynamic(
  () => import("./charts/bar-chart").then((mod) => mod.ChannelBarChart),
  { ssr: false }
);
const SegmentPieChart = dynamic(
  () => import("./charts/pie-chart").then((mod) => mod.SegmentPieChart),
  { ssr: false }
);
const TopPagesList = dynamic(
  () => import("./widgets/top-pages-list").then((mod) => mod.TopPagesList),
  { ssr: false }
);

export function AnalyticsDashboard() {

  const quickActions = [
    {
      id: "export-report",
      title: "Export analytics report",
      description: "Download comprehensive analytics data",
      href: "#",
    },
    {
      id: "create-segment",
      title: "Create audience segment",
      description: "Define new user segments",
      href: "#",
    },
    {
      id: "schedule-report",
      title: "Schedule report",
      description: "Set up automated reports",
      href: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Analytics</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Analytics & Insights
          </h1>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            Today •{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <StatCards stats={analyticsStats} />

      {/* Traffic Overview */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart
            data={analyticsTraffic}
            title="Traffic Overview"
          />
        </div>
        <div>
          <SegmentPieChart
            data={deviceBreakdown}
            title="Device Breakdown"
            description="User devices"
          />
        </div>
      </div>

      {/* Traffic Sources & Top Pages */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div>
          <ChannelBarChart
            data={trafficSources}
            title="Traffic Sources"
            description="Top referrers"
          />
        </div>
        <div className="lg:col-span-2">
          <TopPagesList data={topPages} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed items={analyticsActivity} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
