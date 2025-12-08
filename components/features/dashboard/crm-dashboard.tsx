"use client";

import dynamic from "next/dynamic";

import {
  crmStats,
  pipelineTrend,
  leadSources,
  dealStages,
  crmActivity,
  pipelineStages,
} from "@/lib/mocks/crm-dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { StatCards } from "./stat-cards";

// Dynamic imports for chart components - CRM specific
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
const PipelineStages = dynamic(
  () => import("./widgets/pipeline-stages").then((mod) => mod.PipelineStages),
  { ssr: false }
);

export function CRMDashboard() {

  const quickActions = [
    {
      id: "add-lead",
      title: "Add new lead",
      description: "Create a new lead entry",
      href: "#",
    },
    {
      id: "create-deal",
      title: "Create deal",
      description: "Start a new sales opportunity",
      href: "#",
    },
    {
      id: "schedule-meeting",
      title: "Schedule meeting",
      description: "Book a client meeting",
      href: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">CRM</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Customer Relationships
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

      <StatCards stats={crmStats} />

      {/* Pipeline Overview */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={pipelineTrend} title="Pipeline Value Trend" />
        </div>
        <div>
          <SegmentPieChart
            data={dealStages}
            title="Deals by Stage"
            description="Distribution"
          />
        </div>
      </div>

      {/* Pipeline Stages & Lead Sources */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PipelineStages data={pipelineStages} />
        </div>
        <div>
          <ChannelBarChart
            data={leadSources}
            title="Lead Sources"
            description="Acquisition channels"
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed items={crmActivity} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
