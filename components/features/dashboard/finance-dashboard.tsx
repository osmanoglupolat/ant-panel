"use client";

import dynamic from "next/dynamic";

import {
  financeStats,
  financialTrend,
  expenseCategories,
  revenueStreams,
  financeActivity,
  revenueVsExpenses,
} from "@/lib/mocks/finance-dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { StatCards } from "./stat-cards";

// Dynamic imports for chart components - Finance specific
const DualLineChart = dynamic(
  () => import("./charts/dual-line-chart").then((mod) => mod.DualLineChart),
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
const StackedBarChart = dynamic(
  () => import("./charts/stacked-bar-chart").then((mod) => mod.StackedBarChart),
  { ssr: false }
);

export function FinanceDashboard() {

  const quickActions = [
    {
      id: "create-invoice",
      title: "Create invoice",
      description: "Generate a new invoice",
      href: "#",
    },
    {
      id: "record-expense",
      title: "Record expense",
      description: "Log a new business expense",
      href: "#",
    },
    {
      id: "generate-report",
      title: "Generate report",
      description: "Create financial reports",
      href: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Finance</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Financial Overview
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

      <StatCards stats={financeStats} />

      {/* Revenue vs Expenses */}
      <DualLineChart
        data={revenueVsExpenses}
        title="Revenue vs Expenses"
        description="Financial comparison"
        label1="Revenue"
        label2="Expenses"
      />

      {/* Expense Breakdown & Revenue Streams */}
      <div className="grid gap-4 lg:grid-cols-2">
        <ChannelBarChart
          data={expenseCategories}
          title="Expense Categories"
          description="Spending breakdown"
        />
        <SegmentPieChart
          data={revenueStreams}
          title="Revenue Streams"
          description="Income sources"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed items={financeActivity} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
