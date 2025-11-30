import type {
  ActivityItem,
  DashboardData,
  QuickAction,
  RevenuePoint,
  StatCard,
} from "@/lib/types/dashboard";

const stats: StatCard[] = [
  {
    id: "revenue",
    label: "MRR",
    value: "$128,940",
    change: "+18.4%",
    trend: "up",
  },
  {
    id: "customers",
    label: "Active customers",
    value: "2,481",
    change: "+6.1%",
    trend: "up",
  },
  {
    id: "retention",
    label: "Net retention",
    value: "132%",
    change: "-1.2%",
    trend: "down",
  },
  {
    id: "tickets",
    label: "Open tickets",
    value: "64",
    change: "-22.5%",
    trend: "up",
  },
];

const revenueTrend: RevenuePoint[] = [
  { date: "Jan", revenue: 72_000 },
  { date: "Feb", revenue: 76_500 },
  { date: "Mar", revenue: 81_200 },
  { date: "Apr", revenue: 90_400 },
  { date: "May", revenue: 95_100 },
  { date: "Jun", revenue: 102_300 },
  { date: "Jul", revenue: 110_800 },
];

const activity: ActivityItem[] = [
  {
    id: "deploy",
    title: "New production rollout",
    description: "v3.8.2 • 241 services",
    time: "6m ago",
    status: "success",
  },
  {
    id: "billing",
    title: "Billing cycle closed",
    description: "Processed 2,143 invoices",
    time: "32m ago",
    status: "pending",
  },
  {
    id: "uptime",
    title: "Incident #483 resolved",
    description: "EU-West cluster latency",
    time: "1h ago",
    status: "success",
  },
  {
    id: "alert",
    title: "Policy review required",
    description: "SOC 2 Type II readiness",
    time: "3h ago",
    status: "alert",
  },
];

const quickActions: QuickAction[] = [
  {
    id: "create-report",
    title: "Create executive report",
    description: "Export the latest KPIs to PDF",
    href: "#",
  },
  {
    id: "invite-member",
    title: "Invite a new member",
    description: "Provision access to Ant Panel",
    href: "#",
  },
  {
    id: "sync-calendar",
    title: "Sync roadmap to calendar",
    description: "Push sprints to GCal",
    href: "#",
  },
];

export const dashboardData: DashboardData = {
  stats,
  revenueTrend,
  activity,
  quickActions,
};


