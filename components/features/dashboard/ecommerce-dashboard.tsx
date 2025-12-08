"use client";

import dynamic from "next/dynamic";

import {
  ecommerceStats,
  salesTrend,
  productCategories,
  topProducts,
  ecommerceActivity,
  conversionFunnel,
  recentOrders,
} from "@/lib/mocks/ecommerce-dashboard";

import { ActivityFeed } from "./activity-feed";
import { QuickActions } from "./quick-actions";
import { StatCards } from "./stat-cards";

// Dynamic imports for chart components - Ecommerce specific
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
const FunnelChart = dynamic(
  () => import("./charts/funnel-chart").then((mod) => mod.FunnelChart),
  { ssr: false }
);
const RecentOrders = dynamic(
  () => import("./widgets/recent-orders").then((mod) => mod.RecentOrders),
  { ssr: false }
);

export function EcommerceDashboard() {

  const quickActions = [
    {
      id: "add-product",
      title: "Add new product",
      description: "Create a new product listing",
      href: "#",
    },
    {
      id: "process-order",
      title: "Process orders",
      description: "View and manage pending orders",
      href: "#",
    },
    {
      id: "inventory-check",
      title: "Check inventory",
      description: "Review stock levels and alerts",
      href: "#",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Ecommerce</p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            E-commerce Overview
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

      <StatCards stats={ecommerceStats} />

      {/* Sales Overview */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={salesTrend} title="Sales Trend" />
        </div>
        <div>
          <SegmentPieChart
            data={topProducts}
            title="Top Products"
            description="Product distribution"
          />
        </div>
      </div>

      {/* Conversion Funnel & Product Categories */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div>
          <FunnelChart
            data={conversionFunnel}
            title="Conversion Funnel"
            description="Sales funnel"
          />
        </div>
        <div className="lg:col-span-2">
          <ChannelBarChart
            data={productCategories}
            title="Sales by Category"
            description="Revenue breakdown"
          />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders data={recentOrders} />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed items={ecommerceActivity} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
