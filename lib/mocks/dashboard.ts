import type {
  ActivityItem,
  ChannelBreakdown,
  DashboardData,
  QuickAction,
  RevenuePoint,
  SegmentShare,
  StatCard,
} from "@/lib/types/dashboard";
import type { UserRecord } from "@/lib/types/users";

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

const channelBreakdown: ChannelBreakdown[] = [
  { channel: "Self-serve", amount: 56000 },
  { channel: "Sales-assisted", amount: 32000 },
  { channel: "Enterprise", amount: 22000 },
  { channel: "Partners", amount: 18500 },
];

const segmentShare: SegmentShare[] = [
  { segment: "Fintech", value: 32 },
  { segment: "Healthcare", value: 22 },
  { segment: "Retail", value: 18 },
  { segment: "SaaS", value: 28 },
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

const users: UserRecord[] = [
  {
    id: "usr-1",
    name: "Sarah Tan",
    email: "sarah@antpanel.dev",
    role: "Owner",
    status: "active",
    lastActive: "2m ago",
    avatar: "/avatars/shadcn.jpg",
    location: "Istanbul, TR",
    plan: "Scale",
  },
  {
    id: "usr-2",
    name: "Ethan Zhou",
    email: "ethan@antpanel.dev",
    role: "Admin",
    status: "active",
    lastActive: "18m ago",
    avatar: "/avatars/shadcn.jpg",
    location: "Berlin, DE",
    plan: "Scale",
  },
  {
    id: "usr-3",
    name: "Maya Uzun",
    email: "maya@antpanel.dev",
    role: "Editor",
    status: "invited",
    lastActive: "—",
    avatar: "/avatars/shadcn.jpg",
    location: "Ankara, TR",
    plan: "Growth",
  },
  {
    id: "usr-4",
    name: "David Lang",
    email: "david@antpanel.dev",
    role: "Viewer",
    status: "disabled",
    lastActive: "Yesterday",
    avatar: "/avatars/shadcn.jpg",
    location: "London, UK",
    plan: "Legacy",
  },
];

export const dashboardData: DashboardData = {
  stats,
  revenueTrend,
  channelBreakdown,
  segmentShare,
  activity,
  quickActions,
  users,
};





