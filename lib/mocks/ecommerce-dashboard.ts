import type {
  ActivityItem,
  ChannelBreakdown,
  RevenuePoint,
  SegmentShare,
  StatCard,
} from "@/lib/types/dashboard";

export const ecommerceStats: StatCard[] = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    value: "$892,340",
    change: "+28.4%",
    trend: "up",
  },
  {
    id: "orders",
    label: "Orders",
    value: "12,847",
    change: "+19.2%",
    trend: "up",
  },
  {
    id: "avg-order",
    label: "Avg Order Value",
    value: "$69.45",
    change: "+8.7%",
    trend: "up",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "3.24%",
    change: "+0.42%",
    trend: "up",
  },
];

export const salesTrend: RevenuePoint[] = [
  { date: "Jan", revenue: 125_000 },
  { date: "Feb", revenue: 148_000 },
  { date: "Mar", revenue: 162_000 },
  { date: "Apr", revenue: 185_000 },
  { date: "May", revenue: 210_000 },
  { date: "Jun", revenue: 235_000 },
  { date: "Jul", revenue: 267_000 },
];

export const productCategories: ChannelBreakdown[] = [
  { channel: "Electronics", amount: 340000 },
  { channel: "Clothing", amount: 280000 },
  { channel: "Home & Garden", amount: 145000 },
  { channel: "Sports", amount: 89000 },
  { channel: "Books", amount: 38000 },
];

export const topProducts: SegmentShare[] = [
  { segment: "Wireless Headphones", value: 24 },
  { segment: "Smart Watch", value: 18 },
  { segment: "Laptop", value: 15 },
  { segment: "Tablet", value: 12 },
  { segment: "Other", value: 31 },
];

export const ecommerceActivity: ActivityItem[] = [
  {
    id: "order",
    title: "Large order received",
    description: "$4,250 order • Customer #8472",
    time: "15m ago",
    status: "success",
  },
  {
    id: "inventory",
    title: "Low stock alert",
    description: "Wireless Headphones • 12 units left",
    time: "1h ago",
    status: "alert",
  },
  {
    id: "refund",
    title: "Refund processed",
    description: "Order #1234 • $89.99",
    time: "3h ago",
    status: "pending",
  },
  {
    id: "review",
    title: "New product review",
    description: "4.8/5 stars • Smart Watch",
    time: "5h ago",
    status: "success",
  },
];

export const conversionFunnel = [
  { stage: "Visitors", value: 125000 },
  { stage: "Add to Cart", value: 48500 },
  { stage: "Checkout", value: 28700 },
  { stage: "Completed", value: 22450 },
];

export const recentOrders = [
  {
    id: "ORD-2024-0847",
    customer: "Sarah Johnson",
    product: "Wireless Headphones",
    amount: 129.99,
    status: "completed" as const,
    date: new Date("2024-07-15T14:30:00"),
  },
  {
    id: "ORD-2024-0846",
    customer: "Michael Chen",
    product: "Smart Watch Pro",
    amount: 349.99,
    status: "processing" as const,
    date: new Date("2024-07-15T13:15:00"),
  },
  {
    id: "ORD-2024-0845",
    customer: "Emily Davis",
    product: "Laptop Stand",
    amount: 79.99,
    status: "completed" as const,
    date: new Date("2024-07-15T12:00:00"),
  },
  {
    id: "ORD-2024-0844",
    customer: "David Wilson",
    product: "Mechanical Keyboard",
    amount: 159.99,
    status: "pending" as const,
    date: new Date("2024-07-15T11:45:00"),
  },
  {
    id: "ORD-2024-0843",
    customer: "Jessica Martinez",
    product: "USB-C Hub",
    amount: 45.99,
    status: "completed" as const,
    date: new Date("2024-07-15T10:20:00"),
  },
];

