import type {
  ActivityItem,
  ChannelBreakdown,
  RevenuePoint,
  SegmentShare,
  StatCard,
} from "@/lib/types/dashboard";

export const analyticsStats: StatCard[] = [
  {
    id: "page-views",
    label: "Page Views",
    value: "2.4M",
    change: "+24.8%",
    trend: "up",
  },
  {
    id: "unique-visitors",
    label: "Unique Visitors",
    value: "847K",
    change: "+18.2%",
    trend: "up",
  },
  {
    id: "bounce-rate",
    label: "Bounce Rate",
    value: "32.1%",
    change: "-4.2%",
    trend: "up",
  },
  {
    id: "avg-session",
    label: "Avg Session",
    value: "4m 32s",
    change: "+12.3%",
    trend: "up",
  },
];

export const analyticsTraffic: RevenuePoint[] = [
  { date: "Mon", revenue: 42000 },
  { date: "Tue", revenue: 48500 },
  { date: "Wed", revenue: 45200 },
  { date: "Thu", revenue: 53100 },
  { date: "Fri", revenue: 48900 },
  { date: "Sat", revenue: 36200 },
  { date: "Sun", revenue: 41800 },
];

export const trafficSources: ChannelBreakdown[] = [
  { channel: "Organic Search", amount: 124000 },
  { channel: "Direct", amount: 78000 },
  { channel: "Social Media", amount: 56000 },
  { channel: "Referral", amount: 34000 },
  { channel: "Email", amount: 22000 },
];

export const deviceBreakdown: SegmentShare[] = [
  { segment: "Mobile", value: 52 },
  { segment: "Desktop", value: 38 },
  { segment: "Tablet", value: 10 },
];

export const analyticsActivity: ActivityItem[] = [
  {
    id: "campaign",
    title: "New campaign launched",
    description: "Summer Sale 2024 • 15K impressions",
    time: "2h ago",
    status: "success",
  },
  {
    id: "alert",
    title: "Traffic spike detected",
    description: "200% increase in organic traffic",
    time: "5h ago",
    status: "alert",
  },
  {
    id: "optimization",
    title: "A/B test completed",
    description: "Landing page conversion +12%",
    time: "1d ago",
    status: "success",
  },
  {
    id: "report",
    title: "Monthly report generated",
    description: "Q2 analytics summary available",
    time: "2d ago",
    status: "pending",
  },
];

export const topPages = [
  {
    path: "/products",
    views: 125000,
    uniqueViews: 87400,
    avgTime: "3m 24s",
    bounceRate: "28.4%",
  },
  {
    path: "/home",
    views: 98000,
    uniqueViews: 72000,
    avgTime: "2m 15s",
    bounceRate: "35.2%",
  },
  {
    path: "/about",
    views: 62000,
    uniqueViews: 48500,
    avgTime: "1m 45s",
    bounceRate: "42.1%",
  },
  {
    path: "/contact",
    views: 41000,
    uniqueViews: 32500,
    avgTime: "1m 12s",
    bounceRate: "38.7%",
  },
  {
    path: "/blog",
    views: 35000,
    uniqueViews: 28900,
    avgTime: "4m 32s",
    bounceRate: "25.3%",
  },
];

