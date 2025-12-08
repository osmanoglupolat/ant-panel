"use client";

import dynamic from "next/dynamic";
import { ShowcaseLayout, ShowcaseSection } from "@/components/features/ui/showcase-layout";
import { dashboardData } from "@/lib/mocks/dashboard";

const RevenueChart = dynamic(
  () => import("@/components/features/dashboard/revenue-chart").then((mod) => mod.RevenueChart),
  { ssr: false }
);
const RevenueLineChart = dynamic(
  () => import("@/components/features/dashboard/charts/line-chart").then((mod) => mod.RevenueLineChart),
  { ssr: false }
);
const ChannelBarChart = dynamic(
  () => import("@/components/features/dashboard/charts/bar-chart").then((mod) => mod.ChannelBarChart),
  { ssr: false }
);
const SegmentPieChart = dynamic(
  () => import("@/components/features/dashboard/charts/pie-chart").then((mod) => mod.SegmentPieChart),
  { ssr: false }
);

export function ChartsShowcase() {
  return (
    <ShowcaseLayout
      title="Charts"
      description="Chart components for data visualization."
    >
      <ShowcaseSection title="Area Chart" description="Area chart example">
        <RevenueChart data={dashboardData.revenueTrend} title="Revenue Trend" />
      </ShowcaseSection>

      <ShowcaseSection title="Line Chart" description="Line chart example">
        <RevenueLineChart data={dashboardData.revenueTrend} title="Growth Velocity" />
      </ShowcaseSection>

      <ShowcaseSection title="Bar Chart" description="Bar chart example">
        <ChannelBarChart data={dashboardData.channelBreakdown} title="Acquisition Channels" />
      </ShowcaseSection>

      <ShowcaseSection title="Pie Chart" description="Pie chart example">
        <SegmentPieChart data={dashboardData.segmentShare} title="Revenue Share by Segment" />
      </ShowcaseSection>
    </ShowcaseLayout>
  );
}

