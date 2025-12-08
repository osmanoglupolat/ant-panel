"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import { dashboardData } from "@/lib/mocks/dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { StatCards } from "./stat-cards";
import { WidgetController, WidgetToggle } from "./widget-controller";

// Dynamic imports for chart components - only load when needed
const RevenueChart = dynamic(() => import("./revenue-chart").then((mod) => mod.RevenueChart), {
  ssr: false,
});
const RevenueLineChart = dynamic(
  () => import("./charts/line-chart").then((mod) => mod.RevenueLineChart),
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
const NotificationsPanel = dynamic(
  () => import("./notifications-panel").then((mod) => mod.NotificationsPanel),
  { ssr: false }
);

const DEFAULT_WIDGETS: WidgetToggle[] = [
  { id: "activity", label: "Activity feed", enabled: true },
  { id: "quick-actions", label: "Quick actions", enabled: true },
  { id: "notifications", label: "Notifications", enabled: true },
];

export function DashboardOverview() {
  const {
    stats,
    revenueTrend,
    channelBreakdown,
    segmentShare,
    activity,
    quickActions,
  } = dashboardData;

  const [widgets, setWidgets] = useState<WidgetToggle[]>(() =>
    DEFAULT_WIDGETS.map((widget) => ({ ...widget }))
  );

  const handleWidgetChange = (next: WidgetToggle[]) => setWidgets(next);
  const handleWidgetReset = () =>
    setWidgets(DEFAULT_WIDGETS.map((widget) => ({ ...widget })));

  const widgetControllerProps = useMemo(
    () => ({
      widgets,
      onChange: handleWidgetChange,
      onReset: handleWidgetReset,
    }),
    [widgets]
  );

  const isEnabled = (id: string) =>
    widgets.find((widget) => widget.id === id)?.enabled ?? false;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Dashboard</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Executive overview
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

      <StatCards />

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <RevenueChart data={revenueTrend} />
          <RevenueLineChart data={revenueTrend} />
        </div>
        <div className="space-y-4 lg:col-span-2">
          <ChannelBarChart data={channelBreakdown} />
          <SegmentPieChart data={segmentShare} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {widgets
            .filter((widget) => widget.id !== "notifications" && widget.enabled)
            .map((widget) =>
              widget.id === "activity" ? (
                <ActivityFeed key={widget.id} items={activity} />
              ) : (
                <QuickActions key={widget.id} actions={quickActions} />
              )
            )}
        </div>
        <div className="space-y-4">
          <WidgetController {...widgetControllerProps} />
          {isEnabled("notifications") && <NotificationsPanel />}
        </div>
      </div>
    </div>
  );
}
