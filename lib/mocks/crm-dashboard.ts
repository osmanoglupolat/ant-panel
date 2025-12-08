import type {
  ActivityItem,
  ChannelBreakdown,
  RevenuePoint,
  SegmentShare,
  StatCard,
} from "@/lib/types/dashboard";

export const crmStats: StatCard[] = [
  {
    id: "leads",
    label: "Total Leads",
    value: "1,847",
    change: "+32.1%",
    trend: "up",
  },
  {
    id: "conversions",
    label: "Conversion Rate",
    value: "24.8%",
    change: "+5.2%",
    trend: "up",
  },
  {
    id: "deals",
    label: "Open Deals",
    value: "142",
    change: "+12.4%",
    trend: "up",
  },
  {
    id: "revenue",
    label: "Pipeline Value",
    value: "$4.2M",
    change: "+18.7%",
    trend: "up",
  },
];

export const pipelineTrend: RevenuePoint[] = [
  { date: "Jan", revenue: 3200 },
  { date: "Feb", revenue: 3850 },
  { date: "Mar", revenue: 4200 },
  { date: "Apr", revenue: 4500 },
  { date: "May", revenue: 4800 },
  { date: "Jun", revenue: 5100 },
  { date: "Jul", revenue: 5450 },
];

export const leadSources: ChannelBreakdown[] = [
  { channel: "Website", amount: 1240 },
  { channel: "Referrals", amount: 680 },
  { channel: "Social Media", amount: 420 },
  { channel: "Email Campaigns", amount: 340 },
  { channel: "Events", amount: 167 },
];

export const dealStages: SegmentShare[] = [
  { segment: "Proposal", value: 28 },
  { segment: "Negotiation", value: 22 },
  { segment: "Qualified", value: 18 },
  { segment: "Closed Won", value: 32 },
];

export const crmActivity: ActivityItem[] = [
  {
    id: "deal",
    title: "New deal created",
    description: "$125K • Enterprise Client",
    time: "30m ago",
    status: "success",
  },
  {
    id: "meeting",
    title: "Upcoming meeting",
    description: "Demo call • Tomorrow 2 PM",
    time: "1h ago",
    status: "pending",
  },
  {
    id: "contact",
    title: "New contact added",
    description: "John Smith • CEO at TechCorp",
    time: "2h ago",
    status: "success",
  },
  {
    id: "task",
    title: "Task completed",
    description: "Follow-up email sent",
    time: "4h ago",
    status: "success",
  },
];

export const pipelineStages = [
  {
    stage: "Qualified",
    count: 42,
    value: 1800000,
    percentage: 18,
  },
  {
    stage: "Proposal",
    count: 38,
    value: 2800000,
    percentage: 28,
  },
  {
    stage: "Negotiation",
    count: 28,
    value: 2200000,
    percentage: 22,
  },
  {
    stage: "Closed Won",
    count: 34,
    value: 3200000,
    percentage: 32,
  },
];

