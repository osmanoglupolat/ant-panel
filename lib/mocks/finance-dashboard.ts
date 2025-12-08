import type {
  ActivityItem,
  ChannelBreakdown,
  RevenuePoint,
  SegmentShare,
  StatCard,
} from "@/lib/types/dashboard";

export const financeStats: StatCard[] = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    value: "$2.4M",
    change: "+18.9%",
    trend: "up",
  },
  {
    id: "expenses",
    label: "Total Expenses",
    value: "$1.2M",
    change: "-5.4%",
    trend: "up",
  },
  {
    id: "profit",
    label: "Net Profit",
    value: "$1.2M",
    change: "+45.2%",
    trend: "up",
  },
  {
    id: "profit-margin",
    label: "Profit Margin",
    value: "50.2%",
    change: "+8.1%",
    trend: "up",
  },
];

export const financialTrend: RevenuePoint[] = [
  { date: "Jan", revenue: 380_000 },
  { date: "Feb", revenue: 425_000 },
  { date: "Mar", revenue: 480_000 },
  { date: "Apr", revenue: 520_000 },
  { date: "May", revenue: 575_000 },
  { date: "Jun", revenue: 620_000 },
  { date: "Jul", revenue: 680_000 },
];

export const expenseCategories: ChannelBreakdown[] = [
  { channel: "Salaries", amount: 650000 },
  { channel: "Marketing", amount: 240000 },
  { channel: "Operations", amount: 180000 },
  { channel: "Technology", amount: 130000 },
];

export const revenueStreams: SegmentShare[] = [
  { segment: "Product Sales", value: 42 },
  { segment: "Services", value: 28 },
  { segment: "Subscriptions", value: 20 },
  { segment: "Other", value: 10 },
];

export const financeActivity: ActivityItem[] = [
  {
    id: "invoice",
    title: "Invoice paid",
    description: "$45,000 • Invoice #INV-2024-0847",
    time: "1h ago",
    status: "success",
  },
  {
    id: "payment",
    title: "Payment processed",
    description: "$12,500 • Vendor payment",
    time: "3h ago",
    status: "success",
  },
  {
    id: "alert",
    title: "Budget alert",
    description: "Marketing budget 85% used",
    time: "5h ago",
    status: "alert",
  },
  {
    id: "report",
    title: "Financial report ready",
    description: "Q2 2024 financial summary",
    time: "1d ago",
    status: "pending",
  },
];

export const revenueVsExpenses = [
  { date: "Jan", value1: 380_000, value2: 320_000 },
  { date: "Feb", value1: 425_000, value2: 340_000 },
  { date: "Mar", value1: 480_000, value2: 360_000 },
  { date: "Apr", value1: 520_000, value2: 370_000 },
  { date: "May", value1: 575_000, value2: 380_000 },
  { date: "Jun", value1: 620_000, value2: 390_000 },
  { date: "Jul", value1: 680_000, value2: 400_000 },
];

